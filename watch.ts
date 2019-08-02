import { PlatformAddress, U64 } from "codechain-primitives/lib";
import { SDK } from "codechain-sdk";

import { Tracer } from "../tracer";

export default async function account(
    sdk: SDK,
    tracer: Tracer,
    args: string[],
) {
    let from;
    if (args.length > 0) {
        from = parseInt(args[0], 10);
        } else {
            from = await sdk.rpc.chain.getBestBlockNumber();
        }
    const blockNumber = parseInt(args[0], 10);
    
    for (let blockNumber = from; ; blockNumber++) {
        const block = await eventuallyGetBlock(sdk, blockNumber);

        console.log("Block number", block.number,
            block.hash.toString());

        for (const tx of block.transactions) {
            console.log("Tx",
                tx.unsigned.type(),
                tx.hash().toString());
            if (tx.unsigned.type() === "pay") {
                const { receiver, quantity }: {
                    receiver: PlatformAddress,
                    quantity: U64
                } = tx.unsigned as any;
                const sender = tx.getSignerAddress({
                    networkId: "wc",
                }) 
            }
        }
}
        console.log("   Sender:", sender.toString());
        console.log("   Recever:", recever.toString());
        console.log("   quantity:", quantity.toString());

}

    async function eventuallyGetBlock(
        sdk: SDK, blockNumber: number) {
            while (true) {
            const block = await sdk.rpc.chain
                .getBlock(blockNumber);
            if (block === null) {
                sleep(2_000);
            }
            return block;
        }
}

function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

