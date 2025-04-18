import MateOnchainImagesContract from "../contracts/MateOnchainImagesContract.js";

class MateImageCacher {
  private imageCache = new Map<number, string>();
  private pendingRequests = new Map<number, Promise<string>>();

  public setImage(tokenId: number, dataUrl: string) {
    this.imageCache.set(tokenId, dataUrl);
  }

  public async getImage(tokenId: number): Promise<string> {
    const cachedImage = this.imageCache.get(tokenId);
    if (cachedImage) return cachedImage;

    const pendingRequest = this.pendingRequests.get(tokenId);
    if (pendingRequest) return pendingRequest;

    const request = MateOnchainImagesContract.getImage(BigInt(tokenId));
    this.pendingRequests.set(tokenId, request);

    try {
      const image = await request;
      if (image) this.setImage(tokenId, image);
      return image;
    } finally {
      this.pendingRequests.delete(tokenId);
    }
  }

  public async getBulkImages(tokenIds: number[]): Promise<Map<number, string>> {
    const uniqueIds = [...new Set(tokenIds)];
    const result = new Map<number, string>();

    const uncachedIds = uniqueIds.filter((id) => {
      const image = this.imageCache.get(id);
      if (image) {
        result.set(id, image);
        return false;
      }
      return true;
    });

    if (uncachedIds.length > 0) {
      const images = await MateOnchainImagesContract.getImages(
        uncachedIds.map((id) => BigInt(id)),
      );
      images.forEach((image, index) => {
        const tokenId = uncachedIds[index];
        this.setImage(tokenId, image);
        result.set(tokenId, image);
      });
    }

    return result;
  }
}

export default new MateImageCacher();
