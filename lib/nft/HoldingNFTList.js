import { Dom } from "@commonmodule/app";
import { AppCompConfig } from "@commonmodule/app-components";
import NFTList from "./NFTList.js";
export default class HoldingNFTList extends Dom {
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
        list.on("nftSelected", (nftData) => this.emit("nftSelected", nftData));
    }
}
//# sourceMappingURL=HoldingNFTList.js.map