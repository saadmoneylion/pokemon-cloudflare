import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "@remix-run/dev/server-build";

const handleRequest = createPagesFunctionHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: (context) => {
    console.log(`${context.CLIENT_SECRET}`);
    console.log(`${JSON.stringify(context)}`);
    return {
      context,
    }
  },
});

export function onRequest(context) {
  return handleRequest(context);
}
