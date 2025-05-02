import { el } from "@commonmodule/app";
import BabyPingPreview from "../babyping/BabyPingPreview.js";
import KCDKongPreview from "../kingcrowndao-kongz/KCDKongPreview.js";
import SigorSparrowPreview from "../sigor-sparrows/SigorSparrowPreview.js";
export default function getNFTPreview(nftData) {
    if (nftData.collection === "sigor-sparrows") {
        return new SigorSparrowPreview(nftData);
    }
    else if (nftData.collection === "kingcrowndao-kongz") {
        return new KCDKongPreview(nftData);
    }
    else if (nftData.collection === "babyping") {
        return new BabyPingPreview(nftData);
    }
    else {
        return el("img.nft-preview", { src: nftData.image });
    }
}
//# sourceMappingURL=getNFTPreview.js.map