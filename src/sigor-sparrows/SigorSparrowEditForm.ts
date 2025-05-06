import { DomNode } from "@commonmodule/app";
import { NFTAttributeEditor } from "nft-attribute-editor";
import { NFTData } from "nft-data";
import parts from "./parts.json" assert { type: "json" };
import SigorSparrowPlayer from "./SigorSparrowPlayer.js";
import keyToFrame from "./spritesheet/key-to-frame.json" with { type: "json" };
import spritesheet from "./spritesheet/spritesheet.json" with { type: "json" };

export default class SigorSparrowEditForm extends DomNode {
  private nftPlayer: SigorSparrowPlayer;
  private attributeEditor: NFTAttributeEditor;

  constructor(nftData: NFTData) {
    super(".sigor-sparrow-edit-form.nft-edit-form");
    this.append(
      this.nftPlayer = new SigorSparrowPlayer(nftData),
      this.attributeEditor = new NFTAttributeEditor({
        traitOptions: {
          Style: ["Illustration", "Pixel Art"],
        },
        partOptions: {
          Illustration: parts,
          "Pixel Art": parts,
        },
        baseData: { ...nftData, traits: { Style: nftData.traits!.Style } },
        keyToFrame,
        spritesheet,
        spritesheetImagePath:
          "https://api.matedevdao.workers.dev/sigor-sparrows/spritesheet/spritesheet.png",
      }),
    );

    this.attributeEditor.on(
      "dataChanged",
      (data) => this.nftPlayer.setData(data),
    );
  }
}
