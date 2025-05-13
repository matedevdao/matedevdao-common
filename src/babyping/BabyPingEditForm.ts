import { NFTData } from "nft-data";
import NFTEditForm from "../nft/NFTEditForm.js";
import BabyPingPlayer from "./BabyPingPlayer.js";
import parts from "./parts.json" with { type: "json" };
import keyToFrame from "./spritesheet/key-to-frame.json" with { type: "json" };
import spritesheet from "./spritesheet/spritesheet.json" with { type: "json" };

export default class BabyPingEditForm extends NFTEditForm {
  private nftPlayer: BabyPingPlayer;

  constructor(nftData: NFTData) {
    super(".babyping-edit-form", {
      partOptions: parts,
      baseData: nftData,
      keyToFrame: keyToFrame,
      spritesheet,
      spritesheetImagePath:
        "https://api.matedevdao.workers.dev/babyping/spritesheet/spritesheet.png",
    });

    this.prepend(this.nftPlayer = new BabyPingPlayer(nftData));

    this.attributeEditor.on(
      "dataChanged",
      (data) => this.nftPlayer.setData(data),
    );
  }
}
