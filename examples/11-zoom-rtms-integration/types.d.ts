// Global type declarations for Node.js environment
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      ZOOM_SECRET_TOKEN?: string;
      ZOOM_CLIENT_ID?: string;
      ZOOM_CLIENT_SECRET?: string;
      WEBHOOK_PATH?: string;
      OPENAI_API_KEY?: string;
      ANTHROPIC_API_KEY?: string;
      PINECONE_API_KEY?: string;
      PINECONE_INDEX_NAME?: string;
      AWS_ACCESS_KEY_ID?: string;
      AWS_SECRET_ACCESS_KEY?: string;
      AWS_REGION?: string;
      AWS_S3_BUCKET?: string;
      LOG_LEVEL?: string;
    }
  }

  var process: NodeJS.Process;
  var console: Console;
  var Buffer: BufferConstructor;
}

// Module declarations for packages that might not have types
declare module '@smythos/sdk' {
  export class Agent {
    constructor(config: any);
    addSkill(skill: any): void;
    prompt(message: string): Promise<string>;
    llm: any;
    storage: any;
    vectordb: any;
  }
  
  export class Model {
    static OpenAI(model: string): any;
    static Anthropic(model: string): any;
  }
}

declare module 'crypto' {
  export function createHmac(algorithm: string, key: string): any;
}

declare module 'ws' {
  export default class WebSocket {
    constructor(url: string, options?: any);
    on(event: string, callback: Function): void;
    send(data: string): void;
    close(): void;
  }
}

declare module 'express' {
  export interface Request {
    body: any;
  }
  
  export interface Response {
    json(data: any): void;
    sendStatus(code: number): void;
  }
  
  export default function express(): any;
  export { Request, Response };
}

declare module 'dotenv' {
  export function config(): void;
}

export {};
