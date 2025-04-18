import { SupabaseDataRepository } from "@commonmodule/supabase";
import { NFTHolderQuery } from "./NFTHolderEntity.js";
class NFTHolderRepository extends SupabaseDataRepository {
    constructor() {
        super("nft_holders", NFTHolderQuery);
    }
    async fetchByHolder(holder) {
        return await this.fetch((b) => b.eq("holder", holder));
    }
}
export default new NFTHolderRepository();
//# sourceMappingURL=NFTHolderRepository.js.map