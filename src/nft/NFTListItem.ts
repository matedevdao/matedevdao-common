import { Dom } from "@commonmodule/app";
import getNFTPreview from "./getNFTPreview.js";
import NFTDataWithMeta from "./NFTDataWithMeta.js";

export default class NFTListItem extends Dom {
  constructor(nftData: NFTDataWithMeta) {
    super(".nft-list-item");
    this.append(getNFTPreview(nftData));
  }
}
