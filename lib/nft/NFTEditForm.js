import { Dom } from "@commonmodule/app";
import { NFTAttributeEditor, } from "nft-attribute-editor";
export default class NFTEditForm extends Dom {
    attributeEditor;
    constructor(tag, editorOptions) {
        super(`${tag}.nft-edit-form`);
        this.append(this.attributeEditor = new NFTAttributeEditor(editorOptions));
    }
    getData() {
        return this.attributeEditor.getData();
    }
}
//# sourceMappingURL=NFTEditForm.js.map