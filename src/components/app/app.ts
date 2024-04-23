import { ALL_LANGS } from '../../interfaces-api/index';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    public controller: AppController;
    public view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        this.view.drawAvailableLanguages(ALL_LANGS);
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e) =>
            this.controller.getNews(e, (data) => this.view.drawNews(data))
        );

        document.querySelector('.listOfLanguages')?.addEventListener('click', (event) => {
            (document.querySelector('.sources') as HTMLElement).replaceChildren();
            (document.querySelector('.news') as HTMLElement).replaceChildren();
            if ((event.target as HTMLElement).id !== null) {
                this.controller.getSources((event.target as HTMLElement).id, (data) => this.view.drawSources(data));
                document.querySelector('.listOfLanguages')?.classList.remove('dropdown');
                document.querySelector('.languages p')!.textContent = ' ' + (event.target as HTMLElement).textContent;
            }
        });
    }
}

export default App;
