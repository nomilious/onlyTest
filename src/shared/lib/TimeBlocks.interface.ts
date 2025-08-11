export type TimeBlocksEvent = {
    id: string | number;
    year: number | string;
    title: string;
    description: string;
};

export type TimeBlocksPeriod = {
    id: string | number;
    title: string; // optional label near the top dot (e.g., "Наука")
    events: TimeBlocksEvent[];
};

export type SliderButtonDisabledState = null | "left" | "right" | 'both';
