import { describe, expect, it } from 'vitest';

import {
  AgentSideConnection,
  ClientSideConnection,
  ndJsonStream,
  type Client,
  type InitializeRequest,
  type ReadTextFileRequest,
  type ReadTextFileResponse,
  type RequestPermissionRequest,
  type RequestPermissionResponse,
  type SessionNotification,
  type WriteTextFileRequest,
  type WriteTextFileResponse,
} from '@agentclientprotocol/sdk';
import type { NighthawkHarness } from '@nighthawk/nighthawk-sdk';

import { AcpServer } from '../src/server';

/** Minimal Client that throws on every callback so tests fail loudly. */
class StubClient implements Client {
  async requestPermission(_p: RequestPermissionRequest): Promise<RequestPermissionResponse> {
    throw new Error('StubClient.requestPermission should not be called in Phase 2');
  }
  async sessionUpdate(_n: SessionNotification): Promise<void> {
    throw new Error('StubClient.sessionUpdate should not be called in Phase 2');
  }
  async writeTextFile(_p: WriteTextFileRequest): Promise<WriteTextFileResponse> {
    throw new Error('StubClient.writeTextFile should not be called in Phase 2');
  }
  async readTextFile(_p: ReadTextFileRequest): Promise<ReadTextFileResponse> {
    throw new Error('StubClient.readTextFile should not be called in Phase 2');
  }
}

/**
 * Build a bidirectional in-memory ndJSON pair:
 *  - agentSide reads `clientToAgent` and writes to `agentToClient`
 *  - clientSide reads `agentToClient` and writes to `clientToAgent`
 */
function makeInMemoryStreamPair(): {
  agentStream: ReturnType<typeof ndJsonStream>;
  clientStream: ReturnType<typeof ndJsonStream>;
} {
  const clientToAgent = new TransformStream<Uint8Array, Uint8Array>();
  const agentToClient = new TransformStream<Uint8Array, Uint8Array>();
  const agentStream = ndJsonStream(agentToClient.writable, clientToAgent.readable);
  const clientStream = ndJsonStream(clientToAgent.writable, agentToClient.readable);
  return { agentStream, clientStream };
}

describe('AcpServer + AgentSideConnection', () => {
  it('responds to initialize with negotiated v1 capabilities', async () => {
    const harness = {} as NighthawkHarness;
    const { agentStream, clientStream } = makeInMemoryStreamPair();

    // Agent side
    new AgentSideConnection((c) => new AcpServer(harness, c), agentStream);
    // Client side
    const client = new ClientSideConnection((_agent) => new StubClient(), clientStream);

    const request: InitializeRequest = {
      protocolVersion: 1,
      clientCapabilities: {
        fs: { readTextFile: false, writeTextFile: false },
        terminal: false,
      },
    };

    const response = await client.initialize(request);

    expect(response.protocolVersion).toBe(1);
    expect(response.authMethods).toEqual([]);
    expect(response.agentCapabilities?.loadSession).toBe(true);
    expect(response.agentCapabilities?.promptCapabilities?.image).toBe(true);
    expect(response.agentCapabilities?.promptCapabilities?.audio).toBe(false);
    expect(response.agentCapabilities?.promptCapabilities?.embeddedContext).toBe(true);
    expect(response.agentCapabilities?.mcpCapabilities?.http).toBe(true);
    expect(response.agentCapabilities?.mcpCapabilities?.sse).toBe(true);
    expect(response.agentCapabilities?.sessionCapabilities?.list).toEqual({});
    expect(response.agentCapabilities?.sessionCapabilities?.resume).toEqual({});
  });

  it('initialize advertises no auth methods', async () => {
    const harness = {} as NighthawkHarness;
    const { agentStream, clientStream } = makeInMemoryStreamPair();

    new AgentSideConnection((c) => new AcpServer(harness, c), agentStream);
    const client = new ClientSideConnection((_a) => new StubClient(), clientStream);

    const response = await client.initialize({
      protocolVersion: 1,
      clientCapabilities: {
        fs: { readTextFile: false, writeTextFile: false },
        terminal: false,
      },
    });

    expect(response.authMethods).toEqual([]);
  });

  it('honors version negotiation: client v99 still negotiates to v1', async () => {
    const harness = {} as NighthawkHarness;
    const { agentStream, clientStream } = makeInMemoryStreamPair();
    new AgentSideConnection((c) => new AcpServer(harness, c), agentStream);
    const client = new ClientSideConnection((_a) => new StubClient(), clientStream);

    const response = await client.initialize({ protocolVersion: 99 });
    expect(response.protocolVersion).toBe(1);
  });

  it('initialize returns the supplied agentInfo', async () => {
    const harness = {} as NighthawkHarness;
    const { agentStream, clientStream } = makeInMemoryStreamPair();
    const agentInfo = { name: 'NightHawk CLI', version: '9.9.9-test' };
    new AgentSideConnection(
      (c) => new AcpServer(harness, c, { agentInfo }),
      agentStream,
    );
    const client = new ClientSideConnection((_a) => new StubClient(), clientStream);

    const response = await client.initialize({ protocolVersion: 1 });
    expect(response.agentInfo).toEqual(agentInfo);
  });

  it('initialize omits agentInfo when not supplied', async () => {
    const harness = {} as NighthawkHarness;
    const { agentStream, clientStream } = makeInMemoryStreamPair();
    new AgentSideConnection((c) => new AcpServer(harness, c), agentStream);
    const client = new ClientSideConnection((_a) => new StubClient(), clientStream);

    const response = await client.initialize({ protocolVersion: 1 });
    expect(response.agentInfo).toBeUndefined();
  });
});
