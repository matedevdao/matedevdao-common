export default interface NFTData {
    name: string;
    description: string;
    image: string;
    external_url: string;
    animation_url?: string;
    traits?: {
        [traitName: string]: string | number;
    };
    parts: {
        [partName: string]: string | number;
    };
    holder: string;
}
//# sourceMappingURL=NFTData.d.ts.map