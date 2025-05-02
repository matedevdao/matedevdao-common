import { DomNode } from "@commonmodule/app";
import NFTData from "./NFTData.js";
export default class HoldingNFTList extends DomNode<HTMLDivElement, {
    selectNFT: (nftData: NFTData) => void;
}> {
    private walletAddress;
    constructor(walletAddress: string);
    private fetchHoldingNFTs;
    private renderNFTs;
}
//# sourceMappingURL=HoldingNFTList.d.ts.map