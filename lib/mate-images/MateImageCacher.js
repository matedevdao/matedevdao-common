import MateOnchainImagesContract from "../contracts/MateOnchainImagesContract.js";
class MateImageCacher {
    imageCache = new Map();
    pendingRequests = new Map();
    setImage(tokenId, dataUrl) {
        this.imageCache.set(tokenId, dataUrl);
    }
    async getImage(tokenId) {
        const cachedImage = this.imageCache.get(tokenId);
        if (cachedImage)
            return cachedImage;
        const pendingRequest = this.pendingRequests.get(tokenId);
        if (pendingRequest)
            return pendingRequest;
        const request = MateOnchainImagesContract.getImage(BigInt(tokenId));
        this.pendingRequests.set(tokenId, request);
        try {
            const image = await request;
            if (image)
                this.setImage(tokenId, image);
            return image;
        }
        finally {
            this.pendingRequests.delete(tokenId);
        }
    }
    async getBulkImages(tokenIds) {
        const uniqueIds = [...new Set(tokenIds)];
        const result = new Map();
        const uncachedIds = uniqueIds.filter((id) => {
            const image = this.imageCache.get(id);
            if (image) {
                result.set(id, image);
                return false;
            }
            return true;
        });
        if (uncachedIds.length > 0) {
            const images = await MateOnchainImagesContract.getImages(uncachedIds.map((id) => BigInt(id)));
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
//# sourceMappingURL=MateImageCacher.js.map