import { SupabaseDataRepository } from "@common-module/supabase";
import NFTHolderEntity from "./NFTHolderEntity.js";
declare class NFTHolderRepository extends SupabaseDataRepository<NFTHolderEntity> {
    constructor();
    fetchByHolder(holder: string): Promise<NFTHolderEntity[]>;
}
declare const _default: NFTHolderRepository;
export default _default;
//# sourceMappingURL=NFTHolderRepository.d.ts.map