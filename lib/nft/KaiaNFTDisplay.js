import { DomNode, el } from "@common-module/app";
import { AppCompConfig } from "@common-module/app-components";
import MateOnchainImagesContract from "../contracts/MateOnchainImagesContract.js";
import SupportedNFTAddresses from "./SupportedNFTAddresses.js";
export default class KaiaNFTDisplay extends DomNode {
    nftAddress;
    tokenId;
    constructor(nftAddress, tokenId) {
        super(".kaia-nft-display");
        this.nftAddress = nftAddress;
        this.tokenId = tokenId;
        this.loadImage();
    }
    async loadImage() {
        const loadingSpinner = new AppCompConfig.LoadingSpinner().appendTo(this);
        if (this.nftAddress === SupportedNFTAddresses.DogeSoundClubMates) {
            const dataUrl = await MateOnchainImagesContract.getImage(BigInt(this.tokenId));
            if (dataUrl !== "")
                this.append(el("img.pixel-art", { src: dataUrl }));
        }
        loadingSpinner.remove();
    }
}
//# sourceMappingURL=KaiaNFTDisplay.js.map