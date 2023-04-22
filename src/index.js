import { TECH_ARTICLES } from './config.js';
import { worker } from './mocks/browser.js';
import Router from './router/router.js';
import ArticlesView from './view/articles.view.js';

const $main = document.getElementById('root');

const components = {
  home: () => new ArticlesView(TECH_ARTICLES, 'tech').render($main),
  articles: () => ($main.innerText = 'articles'),
  articleDetail: (id) => ($main.innerText = `article: ${id}`),
  notFound: () => ($main.innerText = 'NotFound'),
};

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const router = new Router();

router
  .addRouter('/', components.home)
  .addRouter('/tech', components.articles)
  .addRouter('/tech/article/:articleId', components.articleDetail)
  .addRouter('/design', components.articles)
  .addRouter('/design/article/:articleId', components.articleDetail)
  .setNotFound(components.notFound)
  .start();
