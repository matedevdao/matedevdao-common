import BabyPingEditForm from "../babyping/BabyPingEditForm.js";
import KCDKongEditForm from "../kingcrowndao-kongz/KCDKongEditForm.js";
import SigorSparrowEditForm from "../sigor-sparrows/SigorSparrowEditForm.js";
export default function getNFTEditForm(nftData) {
    if (nftData.collection === "sigor-sparrows") {
        return new SigorSparrowEditForm(nftData);
    }
    else if (nftData.collection === "kingcrowndao-kongz") {
        return new KCDKongEditForm(nftData);
    }
    else if (nftData.collection === "babyping") {
        return new BabyPingEditForm(nftData);
    }
    else {
        throw new Error("Unsupported collection");
    }
}
//# sourceMappingURL=getNFTEditForm.js.map