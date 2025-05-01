import { DomNode } from "@commonmodule/app";
export default class HoldingNFTList extends DomNode {
    walletAddress;
    constructor(walletAddress) {
        super(".holding-nft-list");
        this.walletAddress = walletAddress;
        this.fetchHoldingNFTs();
    }
    async fetchHoldingNFTs() {
        const response = await fetch(`https://api.matedevdao.workers.dev/${this.walletAddress}/nfts`);
        const data = await response.json();
        this.renderNFTs(data);
    }
    renderNFTs(nfts) {
        console.log("Rendering NFTs:", nfts);
    }
}
//# sourceMappingURL=HoldingNFTList.js.map