import { TECH_ARTICLES } from '../config';
import { ArticleDetail, ViewSection } from '../types';
import HttpClient from '../utils/api';
import View from './view';

export default class ArticleView extends View {
  private articleDetail: ArticleDetail;

  constructor(section: ViewSection, containerId: string) {
    super(section, containerId);
  }

  async render(): Promise<void> {
    const response = await new HttpClient('', {}).get({
      path: TECH_ARTICLES,
      method: 'GET',
    });
    this.articleDetail = response.data;
    const { thumbnailImage, title, user, createdAt, content } =
      this.articleDetail;
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

    this.container.innerHTML = this.layout.wrap(template);
  }
}
