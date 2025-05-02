import { el } from "@commonmodule/app";
import BabyPingPreview from "../babyping/BabyPingPreview.js";
import KCDKongPreview from "../kingcrowndao-kongz/KCDKongPreview.js";
import SigorSparrowPlayer from "../sigor-sparrows/SigorSparrowPlayer.js";
export default function getNFTDisplay(nftData) {
    if (nftData.collection === "sigor-sparrows") {
        return new SigorSparrowPlayer(nftData);
    }
    else if (nftData.collection === "kingcrowndao-kongz") {
        return new KCDKongPreview(nftData);
    }
    else if (nftData.collection === "babyping") {
        return new BabyPingPreview(nftData);
    }
    else {
        return el("img.nft-display", { src: nftData.image });
    }
}
//# sourceMappingURL=getNFTDisplay.js.map