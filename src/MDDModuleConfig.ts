import { KaiaWalletModuleConfig } from "kaia-wallet-module";

const MATEDEVDAO_WALLETCONNECT_PROJECT_ID = "647df3b69553d6f1261ea1482bd90d4a";

class MDDModuleConfig {
  public init(options: { appName: string }) {
    KaiaWalletModuleConfig.init({
      ...options,
      walletConnectProjectId: MATEDEVDAO_WALLETCONNECT_PROJECT_ID,
    });
  }
}

export default new MDDModuleConfig();
