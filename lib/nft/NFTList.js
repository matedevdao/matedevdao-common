import { Dom } from "@commonmodule/app";
import NFTListItem from "./NFTListItem.js";
export default class NFTList extends Dom {
    constructor(nfts) {
        super(".nft-list");
        this.renderNFTs(nfts);
    }
    renderNFTs(nfts) {
        this.clear();
        for (const nftData of nfts) {
            const item = new NFTListItem(nftData).appendTo(this);
            item.on("click", () => this.emit("nftSelected", nftData));
        }
    }
}
//# sourceMappingURL=NFTList.js.map