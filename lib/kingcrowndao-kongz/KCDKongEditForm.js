import NFTEditForm from "../nft/NFTEditForm.js";
import KCDKongPlayer from "./KCDKongPlayer.js";
import parts from "./parts.json" with { type: "json" };
import keyToFrame from "./spritesheet/key-to-frame.json" with { type: "json" };
import spritesheet from "./spritesheet/spritesheet.json" with { type: "json" };
export default class KCDKongEditForm extends NFTEditForm {
    nftPlayer;
    constructor(nftData) {
        super(".kcd-kong-edit-form", {
            partOptions: parts,
            baseData: nftData,
            keyToFrame,
            spritesheet,
            spritesheetImagePath: "https://api.matedevdao.workers.dev/kingcrowndao-kongz/spritesheet/spritesheet.png",
        });
        this.prepend(this.nftPlayer = new KCDKongPlayer(nftData));
        this.attributeEditor.on("dataChanged", (data) => this.nftPlayer.setData(data));
    }
}
//# sourceMappingURL=KCDKongEditForm.js.map