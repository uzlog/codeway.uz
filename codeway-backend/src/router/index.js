// @flow
import Router from 'koa-router';

const router: Router = new Router();

router.get('/hi', (ctx) => {
  ctx.body = 'Hello world!';
});

export default router;
