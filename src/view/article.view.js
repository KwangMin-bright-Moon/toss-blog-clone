import { ArticleDetailDto } from '../dto/article.dto';
import HttpClient from '../utils/Api';
import { getYearMonthDate } from './articleList.view';
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
    <div class="article">
        <div class="img">
        <img src="${thumbnailImage}" />
        </div>
        <span class="title">${title}</span>
        <div class="info">
            <img class="avatar" src="${user.profile}" />
            <div class="detail">
                <span class="nameAndPosition">${user.name} | ${
      user.position
    }</spam>
                <span class="date">${getYearMonthDate(createdAt)}</spam>
            </div>
        </div>
        <div class="content">
            <p>${content}</p>
        </div>
    </div>
    `;

    main.innerHTML = layoutView.wrap(template);
  }
}
