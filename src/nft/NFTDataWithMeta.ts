import { NFTData } from "nft-data";

export default interface NFTDataWithMeta extends NFTData {
  collection: string;
  id: number;
  name: string;
  description: string;
  image: string;
  thumbnail?: string;
  external_url: string;
  animation_url?: string;
  holder: string;
}
