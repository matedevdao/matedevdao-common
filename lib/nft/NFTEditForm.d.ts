import { DomNode } from "@commonmodule/app";
import { NFTAttributeEditor, NFTAttributeEditorOptions } from "nft-attribute-editor";
import { NFTData } from "nft-data";
export default abstract class NFTEditForm extends DomNode {
    protected attributeEditor: NFTAttributeEditor;
    constructor(tag: `.${string}`, nftData: NFTData, editorOptions: NFTAttributeEditorOptions);
    getData(): NFTData;
}
//# sourceMappingURL=NFTEditForm.d.ts.map