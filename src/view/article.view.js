import { ArticleDetailDto } from '../dto/article.dto';

export default class ArticleView {
  #url;
  #data;
  #articleId;

  constructor(url, params) {
    this.#url = url;
    const { articleId } = params.find((param) => param['articleId']);
    this.#articleId = articleId;
  }

  getData() {
    const url = this.#url.replace(':articleId', this.#articleId);
    fetch(url)
      .then((res) => res.json())
      .then((article) => {
        const {
          id,
          title,
          createdAt,
          thumbnailImage,
          user,
          recommendedArticles,
          content,
        } = article;
        this.#data = new ArticleDetailDto({
          id,
          title,
          createdAt,
          thumbnailImage,
          user,
          recommendedArticles,
          content,
        });
      });
  }

  render(main) {
    this.getData();
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
