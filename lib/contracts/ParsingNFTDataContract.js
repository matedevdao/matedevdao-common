import { KaiaRpcConnector } from "kaia-wallet-module";
import ParsingNFTDataArtifact from "./artifacts/ParsingNFTData.json" with {
    type: "json"
};
const KAIA_CHAIN_ID = 8217;
const PARSING_NFT_DATA_CONTRACT_ADDRESS = "0x8A98A038dcA75091225EE0a1A11fC20Aa23832A0";
class ParsingNFTDataContract {
    async getERC721HolderList(address, tokenIds) {
        return await KaiaRpcConnector.readContract({
            chainId: KAIA_CHAIN_ID,
            address: PARSING_NFT_DATA_CONTRACT_ADDRESS,
            abi: ParsingNFTDataArtifact.abi,
            functionName: "getERC721HolderList",
            args: [address, tokenIds],
        });
    }
}
export default new ParsingNFTDataContract();
//# sourceMappingURL=ParsingNFTDataContract.js.map