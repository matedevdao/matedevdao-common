import { AppCompConfig } from "@commonmodule/app-components";
import { MaterialLoadingSpinner } from "@commonmodule/material-loading-spinner";
class MDDModuleConfig {
    init() {
        AppCompConfig.LoadingSpinner = MaterialLoadingSpinner;
    }
}
export default new MDDModuleConfig();
//# sourceMappingURL=MDDModuleConfig.js.map