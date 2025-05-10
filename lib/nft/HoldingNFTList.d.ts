import { Dom } from "@commonmodule/app";
import NFTDataWithMeta from "./NFTDataWithMeta.js";
export default class HoldingNFTList extends Dom<HTMLDivElement, {
    selectNFT: (nftData: NFTDataWithMeta) => void;
}> {
    private walletAddress;
    constructor(walletAddress: string);
    private fetchHoldingNFTs;
    private renderNFTs;
}
//# sourceMappingURL=HoldingNFTList.d.ts.map