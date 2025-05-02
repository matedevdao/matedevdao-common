import { DomNode } from "@commonmodule/app";
import { AppCompConfig } from "@commonmodule/app-components";
import NFTList from "./NFTList.js";
export default class HoldingNFTList extends DomNode {
    walletAddress;
    constructor(walletAddress) {
        super(".holding-nft-list");
        this.walletAddress = walletAddress;
        this.fetchHoldingNFTs();
    }
    async fetchHoldingNFTs() {
        const loadingSpinner = new AppCompConfig.LoadingSpinner().appendTo(this);
        const response = await fetch(`https://api.matedevdao.workers.dev/${this.walletAddress}/nfts`);
        const data = await response.json();
        this.renderNFTs(data);
        loadingSpinner.remove();
    }
    renderNFTs(nfts) {
        const list = new NFTList(nfts).appendTo(this);
        list.on("selectNFT", (nftData) => this.emit("selectNFT", nftData));
    }
}
//# sourceMappingURL=HoldingNFTList.js.map