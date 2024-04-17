export interface IStatus {
    status: string;
    sources: ISource[];
}

export interface ISource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface IOneArticle {
    source: ISource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface INewsResponse {
    status: string;
    totalResults: number;
    articles: IOneArticle[];
}

export interface ISourcesResponse {
    status: string;
    sources: ISource[];
}
