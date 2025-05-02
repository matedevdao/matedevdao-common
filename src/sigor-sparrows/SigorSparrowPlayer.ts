import { DomNode } from "@commonmodule/app";
import NFTData from "../nft/NFTData.js";

export default class SigorSparrowPlayer extends DomNode {
  constructor(nftData: NFTData) {
    super(".sigor-sparrow-player.nft-player");
  }
}
