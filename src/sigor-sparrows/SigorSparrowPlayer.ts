import { Dom, el } from "@commonmodule/app";
import {
  AppCompConfig,
  Button,
  ButtonType,
  SvgIcon,
} from "@commonmodule/app-components";
import { ImageCombiner } from "@commonmodule/image-combiner";
import { NFTData } from "nft-data";
import fontUrl from "./fonts/neodgm.woff2";
import parts from "./parts.json" assert { type: "json" };

export default class SigorSparrowPlayer extends Dom {
  constructor(data: NFTData) {
    super(".sigor-sparrow-player.nft-player");
    this.setData(data);
  }

  public async setData(data: NFTData) {
    this.clear();

    const loadingSpinner = new AppCompConfig.LoadingSpinner().appendTo(this);

    const skins: string[] = [];
    for (const [partName, part] of Object.entries(data.parts)) {
      skins.push(`${partName}/${part}`);
    }

    const style = data.traits!["Style"] as string;
    const stylePath = style === "Illustration" ? "normal" : "pixel";

    const images: { src: string; drawingOrder: number }[] = [];
    for (const [partName, partValue] of Object.entries(data.parts)) {
      if (stylePath === "pixel" && partName === "Text Balloon") continue;
      const category = parts.find((cat) => cat.name === partName);
      if (category) {
        const part = category.parts.find((p) => p.name === partValue);
        if (part?.images) {
          for (const image of part.images) {
            images.push({
              src:
                `https://api.matedevdao.workers.dev/sigor-sparrows/parts-images/${stylePath}/${image.path}`,
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

    const base64String = fontUrl.split(",")[1];
    const binaryString = atob(base64String);

    const len = binaryString.length;
    const fontBytes = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
      fontBytes[i] = binaryString.charCodeAt(i);
    }

    const combined = ImageCombiner.combine(1000, 1000, buffers, {
      fontBytes,
      x: 500,
      y: 190,
      text: data.traits!["Dialogue"] as string,
      fontSize: 64,
      color: "#000",
    });

    const blob = new Blob([combined], { type: "image/png" });
    const url = URL.createObjectURL(blob);

    this.append(el("img", { src: url }));

    new Button(".speak-dialogue-button", {
      type: ButtonType.Icon,
      icon: new SvgIcon(
        ".speak",
        "0 -960 960 960",
        '<path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z"/>',
      ),
      onPress: () => {
        const utterance = new SpeechSynthesisUtterance(
          `짹! ${data.traits!["Dialogue"] as string} 짹!`,
        );
        utterance.lang = "ko-KR";
        utterance.pitch = 1.2;
        speechSynthesis.speak(utterance);
      },
    }).appendTo(this);

    loadingSpinner.remove();
  }
}
