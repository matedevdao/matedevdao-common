import { DomNode } from "@common-module/app";
import HoldingNFTListItem from "./HoldingNFTListItem.js";
import NFTHolderRepository from "./NFTHolderRepository.js";

export default class HoldingNFTList extends DomNode {
  constructor(private holder: string) {
    super(".holding-nft-list");
    this.loadHoldingNFTs();
  }

  private async loadHoldingNFTs() {
    const nfts = await NFTHolderRepository.fetchByHolder(this.holder);
    this.append(
      ...nfts.map((nft) => new HoldingNFTListItem(nft)),
    );
  }
}
