import { DomNode } from "@commonmodule/app";
import { DomWrapperNode, GameScreen, Sprite } from "@gaiaengine/2d";
import parts from "./parts.json" assert { type: "json" };
import { Button, ButtonType, SvgIcon } from "@commonmodule/app-components";
export default class SigorSparrowPlayer extends DomNode {
    data;
    screen;
    constructor(data) {
        super(".sigor-sparrow-player.nft-player");
        this.data = data;
        this.screen = new GameScreen({ width: 1000, height: 1000 }).appendTo(this);
        this.on("visible", () => this.updateLayout());
        this.onWindow("resize", () => this.updateLayout());
        this.setData(data);
    }
    updateLayout() {
        const rect = this.calculateRect();
        const widthRatio = rect.width / 1000;
        const heightRatio = rect.width / 1000;
        const ratio = Math.min(widthRatio, heightRatio);
        this.screen.resize(1000, 1000, ratio);
        this.style({ height: `${rect.width}px` });
    }
    setData(data) {
        this.data = data;
        this.render();
    }
    render() {
        this.screen.root.clear();
        const skins = [];
        for (const [partName, part] of Object.entries(this.data.parts)) {
            skins.push(`${partName}/${part}`);
        }
        const style = this.data.traits["Style"];
        const stylePath = style === "Illustration" ? "normal" : "pixel";
        for (const [partName, partValue] of Object.entries(this.data.parts)) {
            const category = parts.find((cat) => cat.name === partName);
            if (category) {
                const part = category.parts.find((p) => p.name === partValue);
                if (part?.images) {
                    for (const image of part.images) {
                        const sprite = new Sprite(0, 0, `https://api.matedevdao.workers.dev/sigor-sparrows/parts-images/${stylePath}/${image.path}`).appendTo(this.screen.root);
                        sprite.drawingOrder = image.drawingOrder;
                    }
                }
            }
        }
        new DomWrapperNode(0, -310, ".dialogue", this.data.traits["Dialogue"], {
            style: {
                fontFamily: "neodgm",
                fontSize: "64px",
                color: "#000",
                textAlign: "center",
                width: "100%",
            },
        }).appendTo(this.screen.root);
        const speakButton = new DomWrapperNode(430, -430, ".speak-dialogue-button", new Button({
            type: ButtonType.Icon,
            icon: new SvgIcon(".speak", "0 -960 960 960", '<path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z"/>'),
            onClick: () => {
                const utterance = new SpeechSynthesisUtterance(`짹! ${this.data.traits["Dialogue"]} 짹!`);
                utterance.lang = "ko-KR";
                utterance.pitch = 1.2;
                speechSynthesis.speak(utterance);
            },
        })).appendTo(this.screen.root);
        speakButton.scale = 3;
    }
}
//# sourceMappingURL=SigorSparrowPlayer.js.map