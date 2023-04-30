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
        this.#data = articles.map(
          (article) =>
            new ArticleDto(
              article.id,
              article.title,
              article.content,
              article.createdAt,
              article.thumbnailImage
            )
        );
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
    this.#data.forEach((article) => {
      articles.push(
        `<li>
           <img src='${article.thumbnailImage}' width='240' height="240""/>
            <div>
                <a href='/${this.#section}/article/${article.id}' data-link>
                         ${article.title}   
                </a>
                <p>${article.content}</p>
                <p>${article.createdAt}</p>
            </div>
        </li>
        `
      );
    });

    main.innerHTML = template.replace('{aricle_list}', articles.join(''));
  }
}
