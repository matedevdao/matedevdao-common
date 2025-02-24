import { DomNode, el } from "@common-module/app";
import { AppCompConfig } from "@common-module/app-components";
import MateOnchainImagesContract from "../contracts/MateOnchainImagesContract.js";
import SupportedCollections from "./SupportedCollections.js";

export default class KaiaNFTDisplay extends DomNode {
  constructor(
    private collection: SupportedCollections,
    private tokenId: bigint,
  ) {
    super(".kaia-nft-display");
    this.loadImage();
  }

  private async loadImage() {
    const loadingSpinner = new AppCompConfig.LoadingSpinner().appendTo(this);

    if (this.collection === SupportedCollections.DogeSoundClubMates) {
      const dataUrl = await MateOnchainImagesContract.getImage(this.tokenId);
      if (dataUrl !== "") this.append(el("img.pixel-art", { src: dataUrl }));
    }

    loadingSpinner.remove();
  }
}
