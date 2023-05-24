import {
  DESIGN_ARTICLES,
  DESIGN_ARTICLE_DETAIL,
  TECH_ARTICLES,
  TECH_ARTICLE_DETAIL,
} from './config.js';
import { worker } from './mocks/browser.js';
import Router from './router/router.js';
import ArticleView from './view/article.view.js';
import ArticleListView from './view/articleList.view.js';
import style from './style.css';

const $main = document.getElementById('root');

const components = {
  home: () => new ArticleListView(TECH_ARTICLES, 'tech').render($main),
  techArticles: () => new ArticleListView(TECH_ARTICLES, 'tech').render($main),
  techArticleDetail: (params) =>
    new ArticleView(TECH_ARTICLE_DETAIL, params).render($main),
  designArticles: () =>
    new ArticleListView(DESIGN_ARTICLES, 'design').render($main),
  designArticleDetail: (params) =>
    new ArticleView(DESIGN_ARTICLE_DETAIL, params).render($main),
  notFound: () => ($main.innerText = 'NotFound'),
};

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const router = new Router();

router
  .addRouter('/', components.home)
  .addRouter('/tech', components.techArticles)
  .addRouter('/tech/article/:articleId', components.techArticleDetail)
  .addRouter('/design', components.designArticles)
  .addRouter('/design/article/:articleId', components.designArticleDetail)
  .setNotFound(components.notFound)
  .start();
