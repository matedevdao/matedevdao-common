import { DomNode } from "@commonmodule/app";
import NFTDataWithMeta from "./NFTDataWithMeta.js";
export default class NFTList extends DomNode<HTMLDivElement, {
    selectNFT: (nftData: NFTDataWithMeta) => void;
}> {
    constructor(nfts: NFTDataWithMeta[]);
    renderNFTs(nfts: NFTDataWithMeta[]): void;
}
//# sourceMappingURL=NFTList.d.ts.map