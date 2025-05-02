import { DomNode } from "@commonmodule/app";
import NFTData from "./NFTData.js";
import getNFTPreview from "./getNFTPreview.js";

export default class NFTListItem extends DomNode {
  constructor(nftData: NFTData) {
    super(".nft-list-item");
    this.append(getNFTPreview(nftData));
  }
}
