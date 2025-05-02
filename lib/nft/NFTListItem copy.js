import { DomNode } from "@commonmodule/app";
import getNFTPreview from "./getNFTPreview.js";
export default class NFTListItem extends DomNode {
    constructor(nftData) {
        super(".nft-list-item");
        this.append(getNFTPreview(nftData));
    }
}
//# sourceMappingURL=NFTListItem%20copy.js.map