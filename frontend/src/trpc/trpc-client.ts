import { createTRPCClient, createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import {RouteType} from "../../../backend/src/trpc/trpc.router";


export const trpcClient = createTRPCProxyClient<RouteType>({
    links: [
      httpBatchLink({
        url: 'http://localhost:3001/trpc',
      }),
    ],
    transformer: undefined
});

