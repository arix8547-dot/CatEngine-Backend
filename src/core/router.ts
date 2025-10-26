import { IncomingMessage, ServerResponse } from "http";
import { routes } from "../api/routes";

export function handleRequest(req: IncomingMessage, res: ServerResponse) {
  const { url, method } = req;

  const route = routes.find(r => r.path === url && r.method === method);

  if (route) {
    route.handler(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found 😿");
  }
}
