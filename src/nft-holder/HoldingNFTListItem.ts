import { DomNode } from "@common-module/app";
import KaiaNFTDisplay from "../nft/KaiaNFTDisplay.js";
import NFTHolderEntity from "./NFTHolderEntity.js";

export default class HoldingNFTListItem extends DomNode {
  constructor(nft: NFTHolderEntity) {
    super(".holding-nft-list-item");
    this.append(
      new KaiaNFTDisplay(nft.nft_address, nft.token_id),
    );
  }
}
