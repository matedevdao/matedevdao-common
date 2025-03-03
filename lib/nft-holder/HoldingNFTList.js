import { DomNode } from "@common-module/app";
import NFTHolderRepository from "./NFTHolderRepository.js";
export default class HoldingNFTList extends DomNode {
    holder;
    constructor(holder) {
        super(".holding-nft-list");
        this.holder = holder;
        this.loadHoldingNFTs(holder);
    }
    async loadHoldingNFTs(holder) {
        const nfts = await NFTHolderRepository.fetchByHolder(holder);
        console.log(nfts);
    }
}
//# sourceMappingURL=HoldingNFTList.js.map