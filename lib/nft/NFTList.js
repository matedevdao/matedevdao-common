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
            const item = new NFTListItem(nftData).appendTo(this);
            item.onDom("click", () => this.emit("selectNFT", nftData));
        }
    }
}
//# sourceMappingURL=NFTList.js.map