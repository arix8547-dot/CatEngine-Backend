import http from "http";
import { handleRequest } from "./core/router";

const PORT = 5050;

const server = http.createServer((req, res) => {
  handleRequest(req, res);
});

server.listen(PORT, () => {
  console.log(`🚀 CatEngine running on port ${PORT}`);
});
