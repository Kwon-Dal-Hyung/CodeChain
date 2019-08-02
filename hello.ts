import { SDK } from "codechain-sdk";

import { Tracer } from "../tracer";

export default function hello(
    sdk: SDK,
    tracer : Tracer,
    args: string[]
) {
    console.log(`Hello, ${tracer.state.nickname}!`);
    if (args.length > 0) {
    const name = args[0];
    console.log(`이름이 ${args[0]}(으)로 바뀌었네요!`);
    tracer.state.nickname = args[0];
}
    const bestblockNumber = 
        await sdk.rpc.chain.getBestBlockNumber();
    console.log("Best block number:",
        bestBlockNumber);
}
