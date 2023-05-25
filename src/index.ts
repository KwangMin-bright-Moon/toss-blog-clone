import { worker } from './mocks/browser';
import Router from './router/router';
import ArticleView from './view/article.view';
import ArticleListView from './view/articleList.view';
import NotFoundView from './view/notfound.view';
const styles = require('./style.css');

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const router = new Router();

router
  .addRouter({ path: '/', view: new ArticleListView('tech', 'root') })
  .addRouter({ path: '/tech', view: new ArticleListView('tech', 'root') })
  .addRouter({
    path: '/tech/article/:articleId',
    view: new ArticleView('tech', 'root'),
  })
  .addRouter({ path: '/design', view: new ArticleListView('design', 'root') })
  .addRouter({
    path: '/design/article/:articleId',
    view: new ArticleView('design', 'root'),
  })
  .setNotFound(new NotFoundView('root'))
  .start();
