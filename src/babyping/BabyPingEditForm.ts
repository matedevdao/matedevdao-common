import { DomNode } from "@commonmodule/app";
import NFTData from "../nft/NFTData.js";

export default class BabyPingEditForm extends DomNode {
  constructor(nftData: NFTData) {
    super(".babyping-edit-form");
  }
}
