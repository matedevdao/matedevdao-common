declare class MateImageCacher {
    private imageCache;
    private pendingRequests;
    setImage(tokenId: number, dataUrl: string): void;
    getImage(tokenId: number): Promise<string>;
    getBulkImages(tokenIds: number[]): Promise<Map<number, string>>;
}
declare const _default: MateImageCacher;
export default _default;
//# sourceMappingURL=MateImageCacher.d.ts.map