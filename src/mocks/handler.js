import { rest } from 'msw';
import { designPosts } from './resolvers/mockDesign.js';
import { developPosts } from './resolvers/mockDevelop.js';

export const handlers = [
  rest.get('dist/tech/posts', (req, res, ctx) => {
    return res(ctx.json(developPosts));
  }),

  rest.get('dist/tech/post/:postId', (req, res, ctx) => {
    const { postId } = req.params;
    const post = developPosts.find((post) => post.id == postId);
    return res(ctx.json(post));
  }),

  rest.get('dist/design/posts', (req, res, ctx) => {
    return res(ctx.json(designPosts));
  }),

  rest.get('dist/design/post/:postId', (req, res, ctx) => {
    const { postId } = req.params;
    const post = designPosts.find((post) => post.id == postId);
    return res(ctx.json(post));
  }),
];
