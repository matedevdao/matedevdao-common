import { DomNode, el } from "@commonmodule/app";
import { AppCompConfig } from "@commonmodule/app-components";
import MateImageCacher from "../mate-images/MateImageCacher.js";
import SupportedNFTAddresses from "./SupportedNFTAddresses.js";

export default class KaiaNFTDisplay extends DomNode {
  constructor(
    private nftAddress: string,
    private tokenId: number,
  ) {
    super(".kaia-nft-display");
    this.loadImage();
  }

  private async loadImage() {
    const loadingSpinner = new AppCompConfig.LoadingSpinner().appendTo(this);

    if (this.nftAddress === SupportedNFTAddresses.DogeSoundClubMates) {
      const dataUrl = await MateImageCacher.getImage(this.tokenId);
      if (dataUrl !== "") this.append(el("img.pixel-art", { src: dataUrl }));
    }

    loadingSpinner.remove();
  }
}
