import { DomNode, el } from "@commonmodule/app";
import BabyPingPlayer from "../babyping/BabyPingPlayer.js";
import KCDKongPlayer from "../kingcrowndao-kongz/KCDKongPlayer.js";
import SigorSparrowPlayer from "../sigor-sparrows/SigorSparrowPlayer.js";
import NFTData from "./NFTData.js";

export default class NFTDisplay extends DomNode {
  constructor(nftData: NFTData) {
    super(".nft-display");
    if (nftData.collection === "sigor-sparrows") {
      this.append(new SigorSparrowPlayer(nftData));
    } else if (nftData.collection === "kingcrowndao-kongz") {
      this.append(new KCDKongPlayer(nftData));
    } else if (nftData.collection === "babyping") {
      this.append(new BabyPingPlayer(nftData));
    } else {
      this.append(el("img", { src: nftData.image }));
    }
  }
}
