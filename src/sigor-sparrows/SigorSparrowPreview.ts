import { DomNode, el } from "@commonmodule/app";
import { GameScreen, Sprite } from "@gaiaengine/dom";
import NFTData from "../nft/NFTData.js";
import parts from "./parts.json" assert { type: "json" };
import keyToFrame from "./spritesheet/key-to-frame.json" assert {
  type: "json",
};
import spritesheet from "./spritesheet/spritesheet.json" assert {
  type: "json",
};

export default class SigorSparrowPreview extends DomNode {
  private gameScreen: GameScreen;

  constructor(nftData: NFTData) {
    super(".sigor-sparrow-preview.nft-preview");
    this.append(
      this.gameScreen = new GameScreen(128, 128),
      el(".dialogue", nftData.traits!["Dialogue"] as string),
    );

    const _keyToFrame = (keyToFrame as any)[nftData.traits!["Style"]];
    for (const [partName, partValue] of Object.entries(nftData.parts)) {
      const category = parts.find((cat) => cat.name === partName);
      if (category) {
        const part = category.parts.find((p) => p.name === partValue);
        if (part?.images) {
          for (const image of part.images) {
            const frame = _keyToFrame[image.path];
            if (!frame) continue;

            const sprite = new Sprite(
              0,
              0,
              "https://api.matedevdao.workers.dev/sigor-sparrows/spritesheet/spritesheet.png",
              spritesheet,
              frame,
            ).appendTo(this.gameScreen.root);
            sprite.zIndex = image.zIndex;
          }
        }
      }
    }

    this.on("visible", () => this.updateGameScreenSize());
    this.onWindow("resize", () => this.updateGameScreenSize());
  }

  private updateGameScreenSize() {
    const rect = this.calculateRect();

    const widthRatio = rect.width / 128;
    const heightRatio = rect.width / 128;
    const ratio = Math.min(widthRatio, heightRatio);

    this.gameScreen.resize(128, 128, ratio);
  }
}
