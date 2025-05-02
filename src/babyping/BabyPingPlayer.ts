import { DomNode } from "@commonmodule/app";
import NFTData from "../nft/NFTData.js";

export default class BabyPingPlayer extends DomNode {
  constructor(nftData: NFTData) {
    super(".babyping-player.nft-player");
  }
}
