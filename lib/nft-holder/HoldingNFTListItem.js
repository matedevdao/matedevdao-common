import { DomNode } from "@commonmodule/app";
import KaiaNFTDisplay from "../nft/KaiaNFTDisplay.js";
export default class HoldingNFTListItem extends DomNode {
    constructor(nft) {
        super(".holding-nft-list-item");
        this.append(new KaiaNFTDisplay(nft.nft_address, nft.token_id));
    }
}
//# sourceMappingURL=HoldingNFTListItem.js.map