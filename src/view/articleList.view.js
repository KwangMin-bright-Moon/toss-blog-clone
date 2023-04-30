import { ArticleDto } from '../dto/article.dto';

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

  getData() {
    fetch(this.#url)
      .then((res) => res.json())
      .then((articles) => {
        this.#data = articles.map((article) => {
          const { id, title, content, createdAt, thumbnailImage } = article;
          return new ArticleDto({
            id,
            title,
            content,
            createdAt,
            thumbnailImage,
          });
        });
      });
  }

  render(main) {
    this.getData();
    const template = `
    <h1>${this.#sectionTitle}</h1>
    <ul> 
    {aricle_list}
    </ul>`;

    const articles = [];
    this.#data?.forEach((article) => {
      articles.push(
        `<li>
           <img src='${article.thumbnailImage}' width='240' height="240""/>
            <div>
                <a href='/${this.#section}/article/${article.id}' data-link>
                         ${article.title}   
                </a>
                <p>${article.content}</p>
                <p>${getYearMonthDate(article.createdAt)}</p>
            </div>
        </li>
        `
      );
    });

    main.innerHTML = template.replace('{aricle_list}', articles.join(''));
  }
}

// TODO: util directory로 이동
export const getYearMonthDate = (targetDate) => {
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const date = targetDate.getDate();
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;

  return `${year}-${formattedMonth}-${date}`;
};
