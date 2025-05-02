import { DomNode } from "@commonmodule/app";
import NFTData from "./NFTData.js";
export default class NFTList extends DomNode<HTMLDivElement, {
    selectNFT: (nftData: NFTData) => void;
}> {
    constructor(nfts: NFTData[]);
    renderNFTs(nfts: NFTData[]): void;
}
//# sourceMappingURL=NFTList.d.ts.map