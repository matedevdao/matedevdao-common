import { DomNode } from "@commonmodule/app";
import { GameScreen, Sprite } from "@gaiaengine/2d";
import NFTData from "../nft/NFTData.js";
import parts from "./parts.json" assert { type: "json" };

export default class BabyPingPlayer extends DomNode {
  private screen: GameScreen;

  constructor(private data: NFTData) {
    super(".baby-ping-player.nft-player");

    this.screen = new GameScreen({ width: 2000, height: 2000 }).appendTo(this);
    this.on("visible", () => this.updateLayout());
    this.onWindow("resize", () => this.updateLayout());

    this.setData(data);
  }

  private updateLayout() {
    const rect = this.calculateRect();

    const widthRatio = rect.width / 2000;
    const heightRatio = rect.width / 2000;
    const ratio = Math.min(widthRatio, heightRatio);

    this.screen.resize(2000, 2000, ratio);

    this.style({ height: `${rect.width}px` });
  }

  public setData(data: NFTData) {
    this.data = data;
    this.render();
  }

  public render() {
    this.screen.root.clear();

    const skins: string[] = [];
    for (const [partName, part] of Object.entries(this.data.parts)) {
      skins.push(`${partName}/${part}`);
    }

    for (const [partName, partValue] of Object.entries(this.data.parts)) {
      const category = parts.find((cat) => cat.name === partName);
      if (category) {
        const part = category.parts.find((p) => p.name === partValue);
        if (part?.images) {
          for (const image of part.images) {
            const sprite = new Sprite(
              0,
              0,
              `https://api.matedevdao.workers.dev/babyping/parts-images/${image.path}`,
            ).appendTo(this.screen.root);
            sprite.drawingOrder = image.drawingOrder;
          }
        }
      }
    }
  }
}
