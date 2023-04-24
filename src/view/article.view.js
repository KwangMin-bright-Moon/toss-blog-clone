import { ArticleDetailDto } from '../dto/article.dto';

export default class ArticleView {
  #url;
  #data;
  #articleId;

  constructor(url, articleId) {
    this.#url = url;
    this.#articleId = articleId;
  }

  async getData() {
    this.#url.replace(':articleId', this.#articleId);
    await fetch(this.#url)
      .then((res) => res.json())
      .then((article) => {
        this.#data = new ArticleDetailDto(
          article.id,
          article.title,
          article.content,
          article.createdAt,
          article.thumbnailImage,
          article.user,
          article.recommendedArticles
        );
      });
  }

  async render(main) {
    await this.getData();
    const { thumbnailImage, title, user, createdAt, content } = this.#data;
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

    main.innerHTML = template;
  }
}
