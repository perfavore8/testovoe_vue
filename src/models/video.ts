export interface Thumbnail {
    [key: string]: unknown;
    url: string;
}

export interface ApiResponse<T> {
    [key: string]: unknown;
    items: T[];
}

export interface VideoSnippet {
    [key: string]: unknown;
    snippet: {
        thumbnails: {
            high: Thumbnail;
            default: Thumbnail;
            medium: Thumbnail;
        };
    };
    id: {
        videoId: string;
    };
    title: string;
    channelTitle: string;
}

export interface VideoStatistics {
    [key: string]: unknown;
    id: string;
    statistics: {
        [key: string]: unknown;
        viewCount: string;
    };
}
