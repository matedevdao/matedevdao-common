import { DomNode } from "@commonmodule/app";
import NFTListItem from "./NFTListItem.js";
export default class NFTList extends DomNode {
    constructor(nfts) {
        super(".nft-list");
        this.renderNFTs(nfts);
    }
    renderNFTs(nfts) {
        this.clear();
        for (const nftData of nfts) {
            this.append(new NFTListItem(nftData));
        }
    }
}
//# sourceMappingURL=NFTList.js.map