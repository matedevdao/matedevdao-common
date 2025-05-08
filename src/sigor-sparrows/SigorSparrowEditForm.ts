import { DomNode, el } from "@commonmodule/app";
import { Input } from "@commonmodule/app-components";
import { NFTData } from "nft-data";
import NFTEditForm from "../nft/NFTEditForm.js";
import parts from "./parts.json" assert { type: "json" };
import SigorSparrowPlayer from "./SigorSparrowPlayer.js";
import keyToFrame from "./spritesheet/key-to-frame.json" with { type: "json" };
import spritesheet from "./spritesheet/spritesheet.json" with { type: "json" };

export default class SigorSparrowEditForm extends NFTEditForm {
  private playerContainer: DomNode;
  private nftPlayer: SigorSparrowPlayer;
  private dialogueInput: Input;

  constructor(nftData: NFTData) {
    super(".sigor-sparrow-edit-form", {
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
    });

    this.prepend(
      el(
        "main",
        this.playerContainer = el(
          ".player-container",
          this.nftPlayer = new SigorSparrowPlayer(nftData),
        ),
        this.dialogueInput = new Input({
          label: "Dialogue",
          value: nftData.traits?.["Dialogue"] as string || "",
          placeholder: "Enter dialogue here...",
        }),
      ),
    );

    this.attributeEditor.on(
      "dataChanged",
      () => this.nftPlayer.setData(this.getData()),
    );

    this.dialogueInput.on(
      "valueChanged",
      () => this.nftPlayer.setData(this.getData()),
    );

    this.on("visible", () => this.resizePlayer());
    this.onWindow("resize", () => this.resizePlayer());
  }

  private resizePlayer() {
    const rect = this.playerContainer.calculateRect();
    const ratio = rect.width / 1000;

    this.playerContainer.style({
      width: `${1000 * ratio}px`,
      height: `${1000 * ratio}px`,
    });

    this.nftPlayer.style({
      transform: `scale(${ratio})`,
      transformOrigin: "left top",
    });
  }

  public getData(): NFTData {
    const data = this.attributeEditor.getData();
    return {
      traits: {
        ...data.traits,
        Dialogue: this.dialogueInput.value,
      },
      parts: { ...data.parts },
    };
  }
}
