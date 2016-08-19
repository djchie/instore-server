import Router from 'koa-router';

const searchRouter = new Router();

// query="", location="", filters={}, sort=""

searchRouter.get('/search', async (ctx, next) => {
  console.log(ctx.query);
  ctx.body = 'You\'re about to make a search!';
});

export default searchRouter;