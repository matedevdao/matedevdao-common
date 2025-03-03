import { DomNode } from "@common-module/app";
import NFTHolderRepository from "./NFTHolderRepository.js";

export default class HoldingNFTList extends DomNode {
  constructor(private holder: string) {
    super(".holding-nft-list");
    this.loadHoldingNFTs(holder);
  }

  private async loadHoldingNFTs(holder: string) {
    const nfts = await NFTHolderRepository.fetchByHolder(holder);
    console.log(nfts);
  }
}
