import { rest } from 'msw';
import { designArticles } from './resolvers/mock.design.js';
import { techArticles } from './resolvers/mock.tech.js';

export const handlers = [
  rest.get('dist/tech/articles', (req, res, ctx) => {
    return res(ctx.json(techArticles));
  }),

  rest.get('dist/tech/article/:articleId', (req, res, ctx) => {
    const { articleId } = req.params;
    const article = techArticles.find((article) => article.id == articleId);
    return res(ctx.json(article));
  }),

  rest.get('dist/design/articles', (req, res, ctx) => {
    return res(ctx.json(designArticles));
  }),

  rest.get('dist/design/article/:articleId', (req, res, ctx) => {
    const { articleId } = req.params;
    const article = designArticles.find((article) => article.id == articleId);
    return res(ctx.json(article));
  }),
];
