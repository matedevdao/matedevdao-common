import { SupabaseConnector } from "@common-module/supabase";
import NFTHolderRepository from "./nft-holder/NFTHolderRepository.js";
class MDDModuleConfig {
    supabaseConnector = new SupabaseConnector("https://auvrvnwprlcilrqjphdu.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1dnJ2bndwcmxjaWxycWpwaGR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0NTkxODQsImV4cCI6MjA1NjAzNTE4NH0.1YK0DJXbxbA_9oCQC8sneaDnq7K9FKBtBe6-jtcAYT0");
    init() {
        NFTHolderRepository.supabaseConnector = this.supabaseConnector;
    }
}
export default new MDDModuleConfig();
//# sourceMappingURL=MDDModuleConfig.js.map