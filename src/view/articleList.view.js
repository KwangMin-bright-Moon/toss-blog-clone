import { ArticleDto } from '../dto/article.dto';
import HttpClient from '../utils/Api';
import LayoutView from './layout.view';

const sectionTitle = {
  tech: '개발',
  design: '디자인',
};

export default class ArticleListView {
  #url;
  #data;
  #section;
  #sectionTitle;

  constructor(url, section) {
    this.#url = url;
    this.#section = section;
    this.#sectionTitle = sectionTitle[section];
  }

  async render(main) {
    const articleList = await new HttpClient().get({ path: this.#url });
    this.#data = articleList.data.map((article) => {
      return new ArticleDto(article);
    });
    const layout = new LayoutView();
    let template = `
    <section class="article-list">
      <h1 class="article-section">${this.#sectionTitle}</h1>
      <ul> 
        {aricle_list}
      </ul>
    </section>`;

    const articles = [];
    this.#data?.forEach((article) => {
      articles.push(
        `<li class="article-list-item">
           <img class="article-list-img" src='${article.thumbnailImage}'/>
            <div>
                <a class="article-title" href='/${this.#section}/article/${
          article.id
        }' data-link>
                         ${article.title}   
                </a>
                <p class="article-content">${article.content.substring(
                  0,
                  300
                )}...</p>
                <p>${getYearMonthDate(article.createdAt)}</p>
            </div>
        </li>
        `
      );
    });

    template = template.replace('{aricle_list}', articles.join(''));

    main.innerHTML = layout.wrap(template);
  }
}

// TODO: util directory로 이동
export const getYearMonthDate = (dates) => {
  const targetDate = new Date(dates);
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const date = targetDate.getDate();
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;

  return `${year}-${formattedMonth}-${date}`;
};
