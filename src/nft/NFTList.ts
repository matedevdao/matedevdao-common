import { DomNode } from "@commonmodule/app";
import NFTData from "./NFTData.js";
import NFTListItem from "./NFTListItem.js";

export default class NFTList extends DomNode<HTMLDivElement, {
  selectNFT: (nftData: NFTData) => void;
}> {
  constructor(nfts: NFTData[]) {
    super(".nft-list");
    this.renderNFTs(nfts);
  }

  public renderNFTs(nfts: NFTData[]) {
    this.clear();
    for (const nftData of nfts) {
      const item = new NFTListItem(nftData).appendTo(this);
      item.onDom("click", () => this.emit("selectNFT", nftData));
    }
  }
}
