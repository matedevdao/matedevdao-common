import { DomNode } from "@commonmodule/app";
import NFTData from "../nft/NFTData.js";

export default class KCDKongPlayer extends DomNode {
  constructor(nftData: NFTData) {
    super(".kcd-kong-player.nft-player");
  }
}
