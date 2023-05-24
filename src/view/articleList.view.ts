import { DESIGN_ARTICLES, TECH_ARTICLES } from '../config';
import { Article, ViewSection } from '../types';
import HttpClient from '../utils/api';
import { getYearMonthDate } from '../utils/date';
import LayoutView from './layout.view';
import View from './view';

const sectionTitle: { tech: string; design: string } = {
  tech: '개발',
  design: '디자인',
};

export default class ArticleListView extends View {
  private articleList: Article[];
  private sectionTitle: string;

  constructor(section: ViewSection, containerId: string) {
    super(section, containerId);
    this.sectionTitle = sectionTitle[section];
  }

  async render() {
    const response = await new HttpClient('', {}).get({
      path: this.sectionTitle === '개발' ? TECH_ARTICLES : DESIGN_ARTICLES,
      method: 'GET',
    });
    this.articleList = response.data;
    let template = `
    <section class="article-list">
      <h1 class="section">${this.sectionTitle}</h1>
      <ul> 
        {aricle_list}
      </ul>
    </section>`;

    const articles: string[] = [];
    this.articleList?.forEach((article) => {
      articles.push(
        `<li class="item">
          <div class="img">
           <img src='${article.thumbnailImage}'/>
          </div>
          <div class="titleAndContents">
            <a class="title" href='/${this.section}/article/${
          article.id
        }' data-link>
                         ${article.title}   
            </a>
            <span class="content">${article.content}</span>
            <span class="date">${getYearMonthDate(article.createdAt)}</span>
          </div>
        </li>
        `
      );
    });

    template = template.replace('{aricle_list}', articles.join(''));

    this.container.innerHTML = this.layout.wrap(template);
  }
}
