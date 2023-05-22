import {
  DESIGN_ARTICLES,
  DESIGN_ARTICLE_DETAIL,
  TECH_ARTICLES,
  TECH_ARTICLE_DETAIL,
} from './config';
import { worker } from './mocks/browser';
import Router from './router/router';
import ArticleView from './view/article.view';
import ArticleListView from './view/articleList.view';

const $main = document.getElementById('root');

const components = {
  home: () => new ArticleListView(TECH_ARTICLES, 'tech').render($main),
  techArticles: () => new ArticleListView(TECH_ARTICLES, 'tech').render($main),
  techArticleDetail: (params: any) =>
    new ArticleView(TECH_ARTICLE_DETAIL, params).render($main),
  designArticles: () =>
    new ArticleListView(DESIGN_ARTICLES, 'design').render($main),
  designArticleDetail: (params: any) =>
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
