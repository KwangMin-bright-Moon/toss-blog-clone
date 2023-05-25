import { DESIGN_ARTICLE_DETAIL } from '../config';
import { TECH_ARTICLE_DETAIL } from '../config';
import { ArticleDetail, ViewSection } from '../types';
import HttpClient from '../utils/api';
import { getYearMonthDate } from '../utils/date';
import View from './view';

export default class ArticleView extends View {
  private articleDetail: ArticleDetail;

  constructor(section: ViewSection, containerId: string) {
    super({ section, containerId });
  }

  async render(): Promise<void> {
    const path = window.location.pathname;

    const id = path.split('article/')[1];

    const url = path.startsWith('/tech')
      ? TECH_ARTICLE_DETAIL
      : DESIGN_ARTICLE_DETAIL;

    const filteredUrl = url.replace(':articleId', id);

    const response = await new HttpClient('', {}).get({
      path: filteredUrl,
      method: 'GET',
    });

    this.articleDetail = response.data;

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
