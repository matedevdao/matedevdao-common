import { NFTData } from "nft-data";
import NFTEditForm from "../nft/NFTEditForm.js";
import parts from "./parts.json" assert { type: "json" };
import SigorSparrowPlayer from "./SigorSparrowPlayer.js";
import keyToFrame from "./spritesheet/key-to-frame.json" with { type: "json" };
import spritesheet from "./spritesheet/spritesheet.json" with { type: "json" };
import { DomNode, el } from "@commonmodule/app";
import { Input } from "@commonmodule/app-components";

export default class SigorSparrowEditForm extends NFTEditForm {
  private playerContainer: DomNode;
  private nftPlayer: SigorSparrowPlayer;
  private dialogueInput: Input;

  constructor(private nftData: NFTData) {
    super(".sigor-sparrow-edit-form", nftData, {
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
      (data) => {
        this.nftData = {
          ...data,
          traits: {
            ...data.traits,
            Dialogue: this.nftData.traits!["Dialogue"],
          },
        };
        this.nftPlayer.setData(data);
      },
    );

    this.dialogueInput.on("valueChanged", (newValue) => {
      this.nftData.traits!["Dialogue"] = newValue;
      this.nftPlayer.setData(this.nftData);
    });

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
    return {
      ...this.nftData,
      traits: {
        ...this.nftData.traits,
        Dialogue: this.dialogueInput.value,
      },
    };
  }
}
