import { IncomingMessage, ServerResponse } from "http";

export function handleRequest(req: IncomingMessage, res: ServerResponse) {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to CatEngine 🐾");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found 😿");
  }
}
