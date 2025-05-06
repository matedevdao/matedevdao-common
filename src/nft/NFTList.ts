import { DomNode } from "@commonmodule/app";
import NFTListItem from "./NFTListItem.js";
import NFTDataWithMeta from "./NFTDataWithMeta.js";

export default class NFTList extends DomNode<HTMLDivElement, {
  selectNFT: (nftData: NFTDataWithMeta) => void;
}> {
  constructor(nfts: NFTDataWithMeta[]) {
    super(".nft-list");
    this.renderNFTs(nfts);
  }

  public renderNFTs(nfts: NFTDataWithMeta[]) {
    this.clear();
    for (const nftData of nfts) {
      const item = new NFTListItem(nftData).appendTo(this);
      item.onDom("click", () => this.emit("selectNFT", nftData));
    }
  }
}
