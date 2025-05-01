import { DomNode } from "@commonmodule/app";
import NFTData from "./NFTData.js";

export default class HoldingNFTList extends DomNode {
  constructor(private walletAddress: string) {
    super(".holding-nft-list");
    this.fetchHoldingNFTs();
  }

  private async fetchHoldingNFTs() {
    const response = await fetch(
      `https://api.matedevdao.workers.dev/${this.walletAddress}/nfts`,
    );
    const data = await response.json();
    this.renderNFTs(data);
  }

  private renderNFTs(nfts: NFTData[]) {
    console.log("Rendering NFTs:", nfts);
  }
}
