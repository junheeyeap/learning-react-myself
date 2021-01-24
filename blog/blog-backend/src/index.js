const Koa = require('Koa');

const app = new Koa();
app.use(ctx => {
    ctx.body = 'hello, world!';
});

app.listen(4000, () => {
    console.log('Listening to port 4000');
});