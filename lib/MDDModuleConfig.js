import { AppCompConfig } from "@commonmodule/app-components";
import { ImageCombiner } from "@commonmodule/image-combiner";
import { MaterialLoadingSpinner } from "@commonmodule/material-loading-spinner";
import { SocialCompConfig, UserManager } from "@commonmodule/social-components";
import { AddressUtils } from "@commonmodule/wallet-utils";
import { KaiaWalletLoginConfig, KaiaWalletLoginManager, } from "kaia-wallet-login-module";
class MDDModuleConfig {
    editableNFTCollections = [
        "sigor-sparrows",
        "kingcrowndao-kongz",
        "babyping",
    ];
    isEditableNFTCollection(collection) {
        return this.editableNFTCollections.includes(collection);
    }
    async init(options) {
        await ImageCombiner.initWasm();
        KaiaWalletLoginConfig.init({
            appName: options.appName,
            apiBaseURL: "https://api.matedevdao.workers.dev",
            walletConnectProjectId: "647df3b69553d6f1261ea1482bd90d4a",
        });
        AppCompConfig.LoadingSpinner = MaterialLoadingSpinner;
        SocialCompConfig.login = async () => {
            const walletAddress = await KaiaWalletLoginManager.login();
            await UserManager.getUser(walletAddress);
        };
        SocialCompConfig.fetchUser = async (walletAddress) => {
            return {
                id: walletAddress,
                name: AddressUtils.shortenAddress(walletAddress),
                username: AddressUtils.shortenAddress(walletAddress),
            };
        };
        SocialCompConfig.fetchBulkUsers = async (walletAddresses) => {
            return walletAddresses.map((walletAddress) => ({
                id: walletAddress,
                name: AddressUtils.shortenAddress(walletAddress),
                username: AddressUtils.shortenAddress(walletAddress),
            }));
        };
        SocialCompConfig.getLoggedInUserMenu = async (menu, user) => {
            return [];
        };
    }
}
export default new MDDModuleConfig();
//# sourceMappingURL=MDDModuleConfig.js.map