export interface ImageCredit {
    photographer?: string;
    stylist?: string;
    mua?: string;
    model?: string;
}

export interface FashionItem {
    id: string;
    src: string;
    credits: ImageCredit;
}
