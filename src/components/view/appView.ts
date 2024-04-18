import News from './news/news';
import Sources from './sources/sources';
import { ISourcesResponse, INewsResponse } from '../../interfaces-api/index';

export interface IAppView {
    news: News;
    sources: Sources;
}

export class AppView implements IAppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data?: INewsResponse): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data?: ISourcesResponse): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
