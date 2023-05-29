import { ArticleDetail, ViewSection } from '../types';
import { ArticleDetailApi } from '../utils/api';
import { getYearMonthDate } from '../utils/date';
import View from './view';

export default class ArticleView extends View {
  private articleDetail: ArticleDetail;

  constructor(section: ViewSection, containerId: string) {
    super({ section, containerId });
  }

  async render(): Promise<void> {
    this.articleDetail = await new ArticleDetailApi().get<ArticleDetail>();

    const { thumbnailImage, title, user, createdAt, content } =
      this.articleDetail;

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

    this.container.innerHTML = this.layout.wrap(template);
  }
}
