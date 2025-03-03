import { DomNode } from "@common-module/app";
import HoldingNFTListItem from "./HoldingNFTListItem.js";
import NFTHolderRepository from "./NFTHolderRepository.js";
export default class HoldingNFTList extends DomNode {
    holder;
    constructor(holder) {
        super(".holding-nft-list");
        this.holder = holder;
        this.loadHoldingNFTs();
    }
    async loadHoldingNFTs() {
        const nfts = await NFTHolderRepository.fetchByHolder(this.holder);
        this.append(...nfts.map((nft) => new HoldingNFTListItem(nft)));
    }
}
//# sourceMappingURL=HoldingNFTList.js.map