import { Dom } from "@commonmodule/app";
import { AppCompConfig } from "@commonmodule/app-components";
import NFTDataWithMeta from "./NFTDataWithMeta.js";
import NFTList from "./NFTList.js";

export default class HoldingNFTList extends Dom<HTMLDivElement, {
  selectNFT: (nftData: NFTDataWithMeta) => void;
}> {
  constructor(private walletAddress: string) {
    super(".holding-nft-list");
    this.fetchHoldingNFTs();
  }

  private async fetchHoldingNFTs() {
    const loadingSpinner = new AppCompConfig.LoadingSpinner().appendTo(this);
    const response = await fetch(
      `https://api.matedevdao.workers.dev/${this.walletAddress}/nfts`,
    );
    const data = await response.json();
    this.renderNFTs(data);
    loadingSpinner.remove();
  }

  private renderNFTs(nfts: NFTDataWithMeta[]) {
    const list = new NFTList(nfts).appendTo(this);
    list.on("selectNFT", (nftData) => this.emit("selectNFT", nftData));
  }
}
