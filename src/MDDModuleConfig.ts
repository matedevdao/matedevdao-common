import { AppCompConfig } from "@commonmodule/app-components";
import { MaterialLoadingSpinner } from "@commonmodule/material-loading-spinner";
import { SocialCompConfig, UserManager } from "@commonmodule/social-components";
import { AddressUtils } from "@commonmodule/wallet-utils";
import {
  KaiaWalletLoginConfig,
  KaiaWalletLoginManager,
} from "kaia-wallet-login-module";

class MDDModuleConfig {
  private editableNFTCollections: string[] = [
    "sigor-sparrows",
    "kingcrowndao-kongz",
    "babyping",
  ];

  public isEditableNFTCollection(collection: string): boolean {
    return this.editableNFTCollections.includes(collection);
  }

  public init(options: { appName: string }) {
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

    SocialCompConfig.fetchUser = async (walletAddress: string) => {
      return {
        id: walletAddress,
        name: AddressUtils.shortenAddress(walletAddress),
        username: AddressUtils.shortenAddress(walletAddress),
      };
    };

    SocialCompConfig.fetchBulkUsers = async (walletAddresses: string[]) => {
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
