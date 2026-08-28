import { Service } from '#/_base/di/service';
import { IInstantiationService } from '#/_base/di/instantiation';
import { IAgentContextMemoryService } from '#/agent/contextMemory/contextMemory';
import { TurnEnded } from '#/agent/loop/turnOps';
import { IAgentToolApprovalService } from '#/agent/toolApproval/toolApproval';
import { denyToolExecution } from '#/agent/toolExecutor/beforeToolExecuteEvent';
import { IAgentToolExecutorService } from '#/agent/toolExecutor/toolExecutor';
import { IEventBus } from '#/app/event/eventBus';
import { IAgentScopeContext } from '#/agent/scopeContext/scopeContext';
import { IAgentStateService } from '#/agent/state/agentState';
import { IEventDispatcher } from '#/state/eventDispatcher';

import { SwarmInjection } from './injection/swarmInjection';
import { IAgentSwarmService, type SwarmModeTrigger } from './swarm';
import { SwarmModeEnter, SwarmModeExit, swarmKey } from '../swarmOps';

export class AgentSwarmService extends Service implements IAgentSwarmService {
  declare readonly _serviceBrand: undefined;

  constructor(
    @IEventDispatcher private readonly dispatcher: IEventDispatcher,
    @IInstantiationService instantiation: IInstantiationService,
    @IEventBus eventBus: IEventBus,
    @IAgentContextMemoryService private readonly context: IAgentContextMemoryService,
    @IAgentToolApprovalService private readonly toolApproval: IAgentToolApprovalService,
    @IAgentToolExecutorService toolExecutor: IAgentToolExecutorService,
    @IAgentScopeContext private readonly agentCtx: IAgentScopeContext,
    @IAgentStateService private readonly agentState: IAgentStateService,
  ) {
    super();
    this.agentState.contributeState(swarmKey);
    this._register(
      instantiation.createInstance(SwarmInjection, {
        getTrigger: () => this.agentState.get(swarmKey),
      }),
    );
    this._register(
      eventBus.subscribe(TurnEnded, () => {
        if (this.shouldAutoExit) {
          this.exit();
        }
      }),
    );
    this._register(
      toolExecutor.onBeforeExecuteTool((event) => {
        const agentSwarmCount = event.toolCalls.filter(
          (toolCall) => toolCall.name === 'AgentSwarm',
        ).length;
        if (agentSwarmCount === 0 || (agentSwarmCount === 1 && event.toolCalls.length === 1)) {
          return;
        }
        event.veto(
          denyToolExecution(
            this.toolApproval.formatDenyMessage(
              agentSwarmCount > 1
                ? multipleAgentSwarmDeniedMessage(event.toolCalls.length > agentSwarmCount)
                : mixedAgentSwarmDeniedMessage(),
            ),
          ),
        );
      }),
    );
  }

  enter(trigger: SwarmModeTrigger): void {
    if (this.agentState.get(swarmKey) !== null) return;
    void this.dispatcher.dispatch(new SwarmModeEnter({ agentId: this.agentCtx.agentId, trigger }));
  }

  exit(): void {
    if (this.agentState.get(swarmKey) === null) return;
    const history = this.context.get();
    void this.dispatcher.dispatch(new SwarmModeExit({ agentId: this.agentCtx.agentId }));
    this.context.publishTrailingRemoval(history);
  }

  get isActive(): boolean {
    return this.agentState.get(swarmKey) !== null;
  }

  private get shouldAutoExit(): boolean {
    const trigger = this.agentState.get(swarmKey);
    return trigger === 'task' || trigger === 'tool';
  }
}

function multipleAgentSwarmDeniedMessage(hasOtherToolCalls: boolean): string {
  const suffix = hasOtherToolCalls
    ? ' AgentSwarm also must not be combined with other tools in the same response.'
    : '';
  return (
    'AgentSwarm must be called one swarm at a time — this response contained multiple AgentSwarm ' +
    'calls, which is rejected. To parallelize many tasks, put ALL items in a single AgentSwarm ' +
    'call (up to 128). To work across phases, call one AgentSwarm, wait for it to finish, then ' +
    `call the next in a new response.${suffix}`
  );
}

function mixedAgentSwarmDeniedMessage(): string {
  return (
    'AgentSwarm must be the only tool call in a model response — this response mixed AgentSwarm ' +
    'with other tools. Retry with a single AgentSwarm call by itself; call other tools only after ' +
    'the AgentSwarm returns.'
  );
}
