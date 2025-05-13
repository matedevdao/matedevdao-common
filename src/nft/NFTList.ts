import { Dom } from "@commonmodule/app";
import NFTDataWithMeta from "./NFTDataWithMeta.js";
import NFTListItem from "./NFTListItem.js";

export default class NFTList extends Dom<HTMLDivElement, {
  nftSelected: (nftData: NFTDataWithMeta) => void;
}> {
  constructor(nfts: NFTDataWithMeta[]) {
    super(".nft-list");
    this.renderNFTs(nfts);
  }

  public renderNFTs(nfts: NFTDataWithMeta[]) {
    this.clear();
    for (const nftData of nfts) {
      const item = new NFTListItem(nftData).appendTo(this);
      item.on("click", () => this.emit("nftSelected", nftData));
    }
  }
}
