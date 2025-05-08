import { DomNode } from "@commonmodule/app";
import {
  NFTAttributeEditor,
  NFTAttributeEditorOptions,
} from "nft-attribute-editor";
import { NFTData } from "nft-data";

export default abstract class NFTEditForm extends DomNode {
  protected attributeEditor: NFTAttributeEditor;

  constructor(
    tag: `.${string}`,
    editorOptions: NFTAttributeEditorOptions,
  ) {
    super(`${tag}.nft-edit-form`);
    this.append(this.attributeEditor = new NFTAttributeEditor(editorOptions));
  }

  public getData(): NFTData {
    return this.attributeEditor.getData();
  }
}
