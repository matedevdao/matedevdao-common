import { DomNode } from "@commonmodule/app";
import { NFTAttributeEditor } from "nft-attribute-editor";
import { NFTData } from "nft-data";
import BabyPingPlayer from "./BabyPingPlayer.js";
import parts from "./parts.json" with { type: "json" };
import keyToFrame from "./spritesheet/key-to-frame.json" with { type: "json" };
import spritesheet from "./spritesheet/spritesheet.json" with { type: "json" };

export default class BabyPingEditForm extends DomNode {
  private nftPlayer: BabyPingPlayer;
  private attributeEditor: NFTAttributeEditor;

  constructor(nftData: NFTData) {
    super(".babyping-edit-form.nft-edit-form");
    this.append(
      this.nftPlayer = new BabyPingPlayer(nftData),
      this.attributeEditor = new NFTAttributeEditor({
        partOptions: parts,
        baseData: nftData,
        keyToFrame: keyToFrame,
        spritesheet,
        spritesheetImagePath:
          "https://api.matedevdao.workers.dev/babyping/spritesheet/spritesheet.png",
      }),
    );

    this.attributeEditor.on(
      "dataChanged",
      (data) => this.nftPlayer.setData(data),
    );
  }
}
