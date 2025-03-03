import { DomNode } from "@common-module/app";
import MateImageCacher from "../mate-images/MateImageCacher.js";
import SupportedNFTAddresses from "../nft/SupportedNFTAddresses.js";
import HoldingNFTListItem from "./HoldingNFTListItem.js";
import NFTHolderRepository from "./NFTHolderRepository.js";

export default class HoldingNFTList extends DomNode {
  constructor(private holder: string) {
    super(".holding-nft-list");
    this.loadHoldingNFTs();
  }

  private async loadHoldingNFTs() {
    const nfts = await NFTHolderRepository.fetchByHolder(this.holder);

    const mateTokenIds = nfts.filter((nft) =>
      nft.nft_address === SupportedNFTAddresses.DogeSoundClubMates
    ).map((nft) => nft.token_id);

    await MateImageCacher.getBulkImages(mateTokenIds);

    this.append(
      ...nfts.map((nft) => new HoldingNFTListItem(nft)),
    );
  }
}
