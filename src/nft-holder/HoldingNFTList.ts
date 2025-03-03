import { DomNode } from "@common-module/app";

export default class HoldingNFTList extends DomNode {
  constructor(private owner: string) {
    super(".holding-nft-list");
    this.loadHoldingNFTs(owner);
  }

  private async loadHoldingNFTs(owner: string) {
  }
}
