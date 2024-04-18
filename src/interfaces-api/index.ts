export interface ISource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface IArticle {
    source: ISource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface INewsResponse extends ISuccessResponse {
    totalResults: number;
    articles: IArticle[];
}

export interface ISourcesResponse extends ISuccessResponse {
    sources: ISource[];
}

export interface ISuccessResponse {
    status: 'ok';
}

export interface IErrorResponse {
    status: 'error';
    code: string;
    message: string;
}

export interface IRequest {
    endpoint: string;
    options?: IUrlOptions;
}

export interface IUrlOptions {
    [index: string]: string | undefined;
    apiKey?: string;
    category?: string;
    language?: string;
    country?: string;
    sources?: string;
    q?: string;
    pageSize?: string;
    page?: string;
    searchIn?: string;
    domains?: string;
    excludeDomains?: string;
    from?: string;
    to?: string;
    sortBy?: string;
}

export type SuccessCallBack<T extends ISuccessResponse> = (data?: T) => void;
