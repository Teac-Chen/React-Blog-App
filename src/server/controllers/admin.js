export const index = async (ctx, next) => {
  await ctx.render('admin', {
    layout: false,
    title: '后台首页'
  });
  return next();
}

export const foo = (ctx, next) => {
  ctx.body = `Welcome to admin foo page! Prefix: ${ctx.route.prefix}`;
  return next();
}