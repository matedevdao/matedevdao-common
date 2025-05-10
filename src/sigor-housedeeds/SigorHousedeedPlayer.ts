import { Dom, el } from "@commonmodule/app";

export default class SigorHousedeedPlayer extends Dom {
  constructor() {
    super(".sigor-housedeed-player.nft-player");
    this.append(
      el("img", {
        src:
          "https://matedevdao.github.io/static-kaia-nft-assets/sigor-housedeed-legacy.avif",
      }),
    );
  }
}
