## Instructions for Copilot:

If you need additional context about some file, look at the .output/ folder
You can find all generated HTML, CSS, JS there.

To understand what had been implemented use CHANGELOG.md. It provides more details about changes.
This file has high order mentions of changes as well.

When explaining changes DO NOT create any .md files, unless asked, write explanations in chat window.

Always use context7 when I need code generation, setup or configuration steps, or
library/API documentation. This means you should automatically use the Context7 MCP
tools to resolve library id and get library docs without being explicitly asked to do that.

After editing some files, add description of what was done to CHANGELOG.md. Be concise. No need to log everything. Use branch name as 3rd level header for changes that were implemented in that particular branch.

Mention in your answers which MCP tools you used to get information. No details needed, just brief info.