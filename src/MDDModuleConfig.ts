import { AppCompConfig } from "@commonmodule/app-components";
import { MaterialLoadingSpinner } from "@commonmodule/material-loading-spinner";

class MDDModuleConfig {
  public init() {
    AppCompConfig.LoadingSpinner = MaterialLoadingSpinner;
  }
}

export default new MDDModuleConfig();
