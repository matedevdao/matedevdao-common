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

    let imageSrc: string | undefined;
    if (this.collection === SupportedCollections.DogeSoundClubMates) {
      imageSrc = await MateOnchainImagesContract.getImage(this.tokenId);
    }

    if (imageSrc && imageSrc !== "") {
      this.append(el("img", { src: imageSrc }));
    }

    loadingSpinner.remove();
  }
}
