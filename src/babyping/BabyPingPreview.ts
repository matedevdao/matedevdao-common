import { DomNode } from "@commonmodule/app";
import NFTData from "../nft/NFTData.js";

export default class BabyPingPreview extends DomNode {
  constructor(nftData: NFTData) {
    super(".babyping-preview");
    this.text = `Baby Ping Preview: ${nftData.name}`;
  }
}
