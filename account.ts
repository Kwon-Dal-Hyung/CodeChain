import { PlatformAddress } from "codechain-primitives/lib";
import { SDK } from "codechain-sdk";

import { Tracer } from "../tracer";

export default async function account(
    sdk: SDK,
    tracer: Tracer,
    args: string[],
) {
    if (args.length === 0) {
        const platform = tracer.getAccounts().platform;
        const ccc = await sdk.rpc.chain.getBalance(platform);
    
    console.log("Your platform address:", 
        address.platformaddress.toString());
    console.log("Balance:", ccc.toLocaleString(), "CCC");

    const ccc = await sdk.rpc.chain.
        .getBalance(address.platformAddress);
    console.log("Balance:", 
        ccc.toLocaleString(), "CCC");
}    
    
        console.log("Platform address:", platform.toString());
    console.log("Balance:", ccc.toLocaleString(), "CCC");
}
