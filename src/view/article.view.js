article.view.js;

import { ArticleDetailDto } from '../dto/article.dto';
import HttpClient from '../utils/Api';
import LayoutView from './layout.view';

export default class ArticleView {
  #url;
  #data;
  #requestParams;

  constructor(url, requestParams) {
    this.#url = url;
    this.#requestParams = requestParams;
  }

  async render(main) {
    const article = await new HttpClient().get({
      path: this.#url,
      requestParams: this.#requestParams,
    });
    this.#data = new ArticleDetailDto(article.data);
    const { thumbnailImage, title, user, createdAt, content } = this.#data;
    const layoutView = new LayoutView();
    const template = `
    <div>
        <img src="${thumbnailImage}" />
        <h1>${title}</h1>
        <div>
            <img src="${user.profile}" />
            <div>
                <span>${user.name} | ${user.position}</spam>
                <span>${createdAt}</spam>
            </div>
        </div>
        <div>
            <p>${content}</p>
        </div>
    </div>
    `;

    main.innerHTML = layoutView.wrap(template);
  }
}
