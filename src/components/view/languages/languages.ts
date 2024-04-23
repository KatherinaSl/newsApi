import { LangMapping } from '../../../interfaces-api/index';
import './languages.css';

class Languages {
    public draw(data: LangMapping): void {
        const ul = document.createElement('ul');
        ul.classList.add('listOfLanguages');
        Object.keys(data).forEach((langKey) => {
            const languageItem = document.createElement('li');
            languageItem.textContent = data[langKey];
            languageItem.id = langKey;
            ul.append(languageItem);
        });
        document.querySelector('.languages')?.append(ul);
    }
}

export default Languages;
