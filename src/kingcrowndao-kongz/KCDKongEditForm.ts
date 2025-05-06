import { DomNode } from "@commonmodule/app";
import { NFTAttributeEditor } from "nft-attribute-editor";
import { NFTData } from "nft-data";
import KCDKongPlayer from "./KCDKongPlayer.js";
import parts from "./parts.json" with { type: "json" };
import keyToFrame from "./spritesheet/key-to-frame.json" with { type: "json" };
import spritesheet from "./spritesheet/spritesheet.json" with { type: "json" };

export default class KCDKongEditForm extends DomNode {
  private nftPlayer: KCDKongPlayer;
  private attributeEditor: NFTAttributeEditor;

  constructor(nftData: NFTData) {
    super(".kcd-kong-edit-form.nft-edit-form");
    this.append(
      this.nftPlayer = new KCDKongPlayer(nftData),
      this.attributeEditor = new NFTAttributeEditor({
        partOptions: parts,
        baseData: nftData,
        keyToFrame,
        spritesheet,
        spritesheetImagePath:
          "https://api.matedevdao.workers.dev/kingcrowndao-kongz/spritesheet/spritesheet.png",
      }),
    );

    this.attributeEditor.on(
      "dataChanged",
      (data) => this.nftPlayer.setData(data),
    );
  }
}
