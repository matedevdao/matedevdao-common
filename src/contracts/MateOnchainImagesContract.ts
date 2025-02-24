import { KaiaRpcConnector } from "kaia-wallet-module";
import MateOnchainImagesArtifact from "./artifacts/MateOnchainImages.json" with {
  type: "json"
};

const KAIA_CHAIN_ID = 8217;
const MATE_ONCHAIN_IMAGES_CONTRACT_ADDRESS =
  "0x059308948cf1F550E15869f9C3E02dCEb8814F0A";

class MateOnchainImagesContract {
  public async getImage(tokenId: bigint): Promise<string> {
    return await KaiaRpcConnector.readContract({
      chainId: KAIA_CHAIN_ID,
      address: MATE_ONCHAIN_IMAGES_CONTRACT_ADDRESS,
      abi: MateOnchainImagesArtifact.abi,
      functionName: "image",
      args: [tokenId],
    }) as string;
  }
}

export default new MateOnchainImagesContract();
