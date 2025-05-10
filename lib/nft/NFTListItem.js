import { Dom } from "@commonmodule/app";
import getNFTPreview from "./getNFTPreview.js";
export default class NFTListItem extends Dom {
    constructor(nftData) {
        super(".nft-list-item");
        this.append(getNFTPreview(nftData));
    }
}
//# sourceMappingURL=NFTListItem.js.map