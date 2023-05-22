import { ArticleDetail } from '../types';
import HttpClient from '../utils/api';
import LayoutView from './layout.view';

export default class ArticleView {
  private url: string;
  private articleDetail: ArticleDetail;
  private requestParams: any;

  constructor(url: string, requestParams: any) {
    this.url = url;
    this.requestParams = requestParams;
  }

  async render(main: HTMLElement) {
    const response = await new HttpClient('', {}).get({
      path: this.url,
      requestParams: this.requestParams,
      method: 'GET',
    });
    this.articleDetail = response.data;
    const { thumbnailImage, title, user, createdAt, content } =
      this.articleDetail;
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
