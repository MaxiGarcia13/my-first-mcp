import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "My First MCP",
  version: "1.0.0",
});

server.registerTool(
  "add",
  {
    title: "Addition Tool",
    description: "Adds two numbers together",
    inputSchema: z.object({
      a: z.number(),
      b: z.number(),
    }),
  },
  async (a, b) => {
    return {
      content: [{ type: "text", text: `${a} + ${b} = ${a + b}` }],
    };
  },
);

const transport = new StdioServerTransport();
await server.connect(transport);
