export const routes = [
  {
    path: "/",
    method: "GET",
    handler: (req: any, res: any) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome to CatEngine 🐾");
    }
  },
  {
    path: "/hello",
    method: "GET",
    handler: (req: any, res: any) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Hello from CatEngine API 😸" }));
    }
  }
];
