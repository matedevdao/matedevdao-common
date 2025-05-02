import { DomNode } from "@commonmodule/app";
export default class SigorSparrowPreview extends DomNode {
    constructor(nftData) {
        super(".sigor-sparrow-preview");
        this.text = `Sigor Sparrow Preview: ${nftData.name}`;
    }
}
//# sourceMappingURL=SigorSparrowPreview.js.map