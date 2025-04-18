import { AppCompConfig } from "@commonmodule/app-components";
import { MaterialLoadingSpinner } from "@commonmodule/material-loading-spinner";
import { KaiaWalletModuleConfig } from "kaia-wallet-module";

const MATEDEVDAO_WALLETCONNECT_PROJECT_ID = "647df3b69553d6f1261ea1482bd90d4a";

class MDDModuleConfig {
  public init(options: { appName: string }) {
    AppCompConfig.LoadingSpinner = MaterialLoadingSpinner;

    KaiaWalletModuleConfig.init({
      ...options,
      walletConnectProjectId: MATEDEVDAO_WALLETCONNECT_PROJECT_ID,
    });
  }
}

export default new MDDModuleConfig();
