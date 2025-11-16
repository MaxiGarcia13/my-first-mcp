# my-first-mcp

My first MCP (Model Context Protocol) server implementation.

Based on the video tutorial https://frontendmasters.com/courses/mcp/

## Description

This is a simple MCP server that provides an addition tool. It demonstrates how to create a basic MCP server using the `@modelcontextprotocol/sdk`.

## Features

- **Addition Tool**: Adds two numbers together and returns the result

## Installation

```bash
npm install
```

## Usage

### Running the server

```bash
npm run myFirstMcp
```

### Testing the server

#### List available tools

```bash
npm run myFirstMcp:list
```

This will return information about all available tools in the server.

#### Call the add tool

```bash
npm run myFirstMcp:call
```

This will call the `add` tool with example arguments (5 + 3) and return the result.

## API

### Tools

#### `add`

Adds two numbers together.

**Parameters:**
- `a` (number): First number
- `b` (number): Second number

**Returns:**
- A text response with the sum of the two numbers

**Example:**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "add",
    "arguments": {
      "a": 5,
      "b": 3
    }
  }
}
```


## Dependencies

- `@modelcontextprotocol/sdk`: MCP SDK for building servers
- `zod`: TypeScript-first schema validation