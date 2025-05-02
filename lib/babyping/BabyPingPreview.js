import { DomNode } from "@commonmodule/app";
export default class BabyPingPreview extends DomNode {
    constructor(nftData) {
        super(".babyping-preview");
        this.text = `Baby Ping Preview: ${nftData.name}`;
    }
}
//# sourceMappingURL=BabyPingPreview.js.map