import NFTEditForm from "../nft/NFTEditForm.js";
import parts from "./parts.json" assert { type: "json" };
import SigorSparrowPlayer from "./SigorSparrowPlayer.js";
import keyToFrame from "./spritesheet/key-to-frame.json" with { type: "json" };
import spritesheet from "./spritesheet/spritesheet.json" with { type: "json" };
import { el } from "@commonmodule/app";
import { Input } from "@commonmodule/app-components";
export default class SigorSparrowEditForm extends NFTEditForm {
    nftData;
    playerContainer;
    nftPlayer;
    dialogueInput;
    constructor(nftData) {
        super(".sigor-sparrow-edit-form", {
            traitOptions: {
                Style: ["Illustration", "Pixel Art"],
            },
            partOptions: {
                Illustration: parts,
                "Pixel Art": parts,
            },
            baseData: { ...nftData, traits: { Style: nftData.traits.Style } },
            keyToFrame,
            spritesheet,
            spritesheetImagePath: "https://api.matedevdao.workers.dev/sigor-sparrows/spritesheet/spritesheet.png",
        });
        this.nftData = nftData;
        this.prepend(el("main", this.playerContainer = el(".player-container", this.nftPlayer = new SigorSparrowPlayer(nftData)), this.dialogueInput = new Input({
            label: "Dialogue",
            value: nftData.traits?.["Dialogue"] || "",
            placeholder: "Enter dialogue here...",
        })));
        this.attributeEditor.on("dataChanged", (data) => {
            this.nftData = {
                traits: {
                    ...data.traits,
                    Dialogue: this.nftData.traits["Dialogue"],
                },
                parts: { ...data.parts },
            };
            this.nftPlayer.setData(data);
        });
        this.dialogueInput.on("valueChanged", (newValue) => {
            this.nftData.traits["Dialogue"] = newValue;
            this.nftPlayer.setData(this.nftData);
        });
        this.on("visible", () => this.resizePlayer());
        this.onWindow("resize", () => this.resizePlayer());
    }
    resizePlayer() {
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
    getData() {
        return this.nftData;
    }
}
//# sourceMappingURL=SigorSparrowEditForm.js.map