import { KaiaRpcConnector } from "kaia-wallet-module";
import MateOnchainImagesArtifact from "./artifacts/MateOnchainImages.json" with {
  type: "json"
};

const KAIA_CHAIN_ID = 8217;
const MATE_ONCHAIN_IMAGES_CONTRACT_ADDRESS =
  "0x7EA36C03544F2138Ba7F69786c570a09FE7086E1";

class MateOnchainImagesContract {
  public async getImages(tokenIds: bigint[]): Promise<string[]> {
    return await KaiaRpcConnector.readContract({
      chainId: KAIA_CHAIN_ID,
      address: MATE_ONCHAIN_IMAGES_CONTRACT_ADDRESS,
      abi: MateOnchainImagesArtifact.abi,
      functionName: "getImages",
      args: [tokenIds],
    }) as string[];
  }

  public async getImage(tokenId: bigint): Promise<string> {
    return (await this.getImages([tokenId]))[0];
  }
}

export default new MateOnchainImagesContract();
