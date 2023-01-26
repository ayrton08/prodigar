import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (req.method == "OPTIONS") {
    return new Response("", {
      status: 204,
      headers: {
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
        Vary: "Access-Control-Request-Headers",
        "Content-Length": "0",
      },
    });
  }
}
