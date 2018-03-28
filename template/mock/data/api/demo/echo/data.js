module.exports = function(ctx) {
  const { data, count = 1 } = ctx.request.body;
  ctx.body = {
    code: 200,
    data: ctx.mock.utils.repeat(data, count),
    systemtime: Date.now()
  };
}