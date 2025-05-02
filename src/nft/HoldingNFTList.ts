import { DomNode } from "@commonmodule/app";
import { AppCompConfig } from "@commonmodule/app-components";
import NFTData from "./NFTData.js";
import NFTList from "./NFTList.js";

export default class HoldingNFTList extends DomNode {
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

  private renderNFTs(nfts: NFTData[]) {
    this.append(new NFTList(nfts));
  }
}
