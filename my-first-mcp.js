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
    inputSchema: {
      a: z.number(),
      b: z.number(),
    },
  },
  async (params) => {
    return {
      content: [{ type: "text", text: String(params.a + params.b) }],
    };
  },
);

const transport = new StdioServerTransport();
await server.connect(transport);
