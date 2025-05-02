import { DomNode } from "@commonmodule/app";
import { GameScreen, Sprite } from "@gaiaengine/2d";
import NFTData from "../nft/NFTData.js";
import parts from "./parts.json" assert { type: "json" };

export default class KCDKongPlayer extends DomNode {
  private screen: GameScreen;

  constructor(private data: NFTData) {
    super(".kcd-kong-player.nft-player");

    this.screen = new GameScreen({ width: 3200, height: 3200 }).appendTo(this);
    this.on("visible", () => this.updateLayout());
    this.onWindow("resize", () => this.updateLayout());

    this.setData(data);
  }

  private updateLayout() {
    const rect = this.calculateRect();

    const widthRatio = rect.width / 3200;
    const heightRatio = rect.width / 3200;
    const ratio = Math.min(widthRatio, heightRatio);

    this.screen.resize(3200, 3200, ratio);

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
              `https://api.matedevdao.workers.dev/kingcrowndao-kongz/parts-images/${image.path}`,
            ).appendTo(this.screen.root);
            sprite.drawingOrder = image.drawingOrder;
          }
        }
      }
    }
  }
}
