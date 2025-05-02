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
        this.append(new NFTList(nfts));
    }
}
//# sourceMappingURL=HoldingNFTList.js.map