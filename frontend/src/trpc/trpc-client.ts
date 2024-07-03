import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { RouteType } from "../../../backend/src/trpc/trpc.router";

export const trpcClient = createTRPCProxyClient<RouteType>({
  links: [
    httpBatchLink({
      url: process.env.REACT_APP_BACKEND_URL as string,
    }),
  ],
  transformer: undefined,
});
