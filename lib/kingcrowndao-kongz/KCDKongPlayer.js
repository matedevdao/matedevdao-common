import { DomNode } from "@commonmodule/app";
import { GameScreen, Sprite } from "@gaiaengine/2d";
import parts from "./parts.json" assert { type: "json" };
export default class KCDKongPlayer extends DomNode {
    data;
    screen;
    constructor(data) {
        super(".kcd-kong-player.nft-player");
        this.data = data;
        this.screen = new GameScreen({ width: 3200, height: 3200 }).appendTo(this);
        this.on("visible", () => this.updateLayout());
        this.onWindow("resize", () => this.updateLayout());
        this.setData(data);
    }
    updateLayout() {
        const rect = this.calculateRect();
        const widthRatio = rect.width / 3200;
        const heightRatio = rect.width / 3200;
        const ratio = Math.min(widthRatio, heightRatio);
        this.screen.resize(3200, 3200, ratio);
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
        for (const [partName, partValue] of Object.entries(this.data.parts)) {
            const category = parts.find((cat) => cat.name === partName);
            if (category) {
                const part = category.parts.find((p) => p.name === partValue);
                if (part?.images) {
                    for (const image of part.images) {
                        const sprite = new Sprite(0, 0, `https://api.matedevdao.workers.dev/kingcrowndao-kongz/parts-images/${image.path}`).appendTo(this.screen.root);
                        sprite.drawingOrder = image.drawingOrder;
                    }
                }
            }
        }
    }
}
//# sourceMappingURL=KCDKongPlayer.js.map