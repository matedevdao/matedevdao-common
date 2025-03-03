import { SupabaseDataRepository } from "@common-module/supabase";
import NFTHolderEntity, { NFTHolderQuery } from "./NFTHolderEntity.js";

class NFTHolderRepository extends SupabaseDataRepository<NFTHolderEntity> {
  constructor() {
    super("nft_holders", NFTHolderQuery);
  }
}

export default new NFTHolderRepository();
