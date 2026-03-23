import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';
import { findQueueTimesParkTool } from '../tools/find-park-tool';

export const themeParkAgent = new Agent({
    id: "theme-park-agent",
    name: "Theme Park Agent",
    instructions: `
    You help someone plan a theme park day.
    
    Be practical. If important details are missing, ask question instead of
    guessing.
    Dont't claim you checked live wait times, hours or weather.

    If you can't verify something, give honest guidance basd on general patterns.

    Keep replies under 5 sentences.
    `,
    model: 'google/gemini-3-flash-preview',
    memory: new Memory(),
    tools: { findQueueTimesParkTool },
});

