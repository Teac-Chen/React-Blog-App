import Router from 'koa-better-router';

import * as Home from '../controllers/home';

const router = Router().loadMethods();

router.get('/', Home.index);
router.get('/foo', Home.foo);
router.get('/del', Home.del);

router.get('/error404', async (ctx, next) => {
  await ctx.render('error/404', {
    layout: false,
    title: '404错误'
  });
  return next();
});

router.get('/error500', async (ctx, next) => {
  await ctx.render('error/500', {
    layout: false,
    title: '500错误'
  });
  return next();
});

export default router