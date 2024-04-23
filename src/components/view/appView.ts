import News from './news/news';
import Sources from './sources/sources';
import Languages from './languages/languages';
import { ISourcesResponse, INewsResponse, LangMapping } from '../../interfaces-api/index';

export interface IAppView {
    news: News;
    sources: Sources;
    languages: Languages;
}

export class AppView implements IAppView {
    news: News;
    sources: Sources;
    languages: Languages;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
        this.languages = new Languages();
    }

    public drawNews(data?: INewsResponse): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data?: ISourcesResponse): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }

    public drawAvailableLanguages(data: LangMapping): void {
        this.languages.draw(data);
        document.querySelector('.languages div')?.addEventListener('click', () => {
            document.querySelector('ul')?.classList.toggle('dropdown');
        });
    }
}

export default AppView;
