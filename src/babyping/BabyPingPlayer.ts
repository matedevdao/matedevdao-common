import { Dom, el } from "@commonmodule/app";
import { AppCompConfig } from "@commonmodule/app-components";
import { ImageCombiner } from "@commonmodule/image-combiner";
import { NFTData } from "nft-data";
import parts from "./parts.json" assert { type: "json" };

export default class BabyPingPlayer extends Dom {
  constructor(data: NFTData) {
    super(".baby-ping-player.nft-player");
    this.setData(data);
  }

  public async setData(data: NFTData) {
    this.clear();

    const loadingSpinner = new AppCompConfig.LoadingSpinner().appendTo(this);

    const skins: string[] = [];
    for (const [partName, part] of Object.entries(data.parts)) {
      skins.push(`${partName}/${part}`);
    }

    const images: { src: string; drawingOrder: number }[] = [];
    for (const [partName, partValue] of Object.entries(data.parts)) {
      const category = parts.find((cat) => cat.name === partName);
      if (category) {
        const part = category.parts.find((p) => p.name === partValue);
        if (part?.images) {
          for (const image of part.images) {
            images.push({
              src:
                `https://api.matedevdao.workers.dev/babyping/parts-images/${image.path}`,
              drawingOrder: image.drawingOrder,
            });
          }
        }
      }
    }

    const buffers = await Promise.all(
      images.map((image) =>
        fetch(image.src).then((response) => response.arrayBuffer())
      ),
    );

    const combined = ImageCombiner.combine(1000, 1000, buffers);

    const blob = new Blob([combined], { type: "image/png" });
    const url = URL.createObjectURL(blob);

    this.append(el("img", { src: url }));

    loadingSpinner.remove();
  }
}
