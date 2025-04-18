import { SupabaseDataRepository } from "@commonmodule/supabase";
import NFTHolderEntity, { NFTHolderQuery } from "./NFTHolderEntity.js";

class NFTHolderRepository extends SupabaseDataRepository<NFTHolderEntity> {
  constructor() {
    super("nft_holders", NFTHolderQuery);
  }

  public async fetchByHolder(holder: string): Promise<NFTHolderEntity[]> {
    return await this.fetch((b) => b.eq("holder", holder));
  }
}

export default new NFTHolderRepository();
