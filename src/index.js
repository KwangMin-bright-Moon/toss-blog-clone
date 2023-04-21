import { worker } from './mocks/browser.js';
import Router from './router/router.js';

const $main = document.getElementById('root');

const components = {
  home: () => ($main.innerText = 'articles'),
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
