import { rest } from 'msw';
import { designArticles } from './resolvers/mock.design';
import { techArticles } from './resolvers/mock.tech';

export const handlers = [
  rest.get('tech', (req, res, ctx) => {
    return res(ctx.json(techArticles));
  }),

  rest.get('tech/article/:articleId', (req, res, ctx) => {
    const { articleId } = req.params;
    const article = techArticles.find((article) => article.id == articleId);
    return res(ctx.json(article));
  }),

  rest.get('design', (req, res, ctx) => {
    return res(ctx.json(designArticles));
  }),

  rest.get('design/article/:articleId', (req, res, ctx) => {
    const { articleId } = req.params;
    const article = designArticles.find((article) => article.id == articleId);
    return res(ctx.json(article));
  }),
];
