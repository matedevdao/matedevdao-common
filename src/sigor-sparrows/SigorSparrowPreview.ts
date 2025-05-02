import { DomNode } from "@commonmodule/app";
import NFTData from "../nft/NFTData.js";

export default class SigorSparrowPreview extends DomNode {
  constructor(nftData: NFTData) {
    super(".sigor-sparrow-preview");
    this.text = `Sigor Sparrow Preview: ${nftData.name}`;
  }
}
