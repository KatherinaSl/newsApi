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
    source: Readonly<ISource>;
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
    articles: Readonly<IArticle>[];
}

export interface ISourcesResponse extends ISuccessResponse {
    sources: Readonly<ISource>[];
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
    options?: Partial<IUrlOptions>;
}

export interface IUrlOptions {
    [index: string]: string | undefined;
    apiKey: string;
    category: string;
    language: string;
    country: string;
    sources: string;
    q: string;
    pageSize: string;
    page: string;
    searchIn: string;
    domains: string;
    excludeDomains: string;
    from: string;
    to: string;
    sortBy: string;
}

export type SuccessCallBack<T extends ISuccessResponse> = (data?: T) => void;

export const ALL_LANGS: LangMapping = {
    ar: 'Arabic',
    de: 'German',
    en: 'English',
    es: 'Spanish',
    fr: 'French',
    he: 'Hebrew',
    it: 'Italian',
    nl: 'Dutch',
    no: 'Norwegian',
    pt: 'Portuguese',
    ru: 'Russian',
    sv: 'Swedish',
    ud: 'Turkish-German',
    zh: 'Chinese',
};

export type LangMapping = Record<string, string>;
