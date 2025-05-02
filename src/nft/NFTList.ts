import { DomNode } from "@commonmodule/app";
import NFTData from "./NFTData.js";
import NFTListItem from "./NFTListItem.js";

export default class NFTList extends DomNode {
  constructor(nfts: NFTData[]) {
    super(".nft-list");
    this.renderNFTs(nfts);
  }

  public renderNFTs(nfts: NFTData[]) {
    this.clear();
    for (const nftData of nfts) {
      this.append(new NFTListItem(nftData));
    }
  }
}
