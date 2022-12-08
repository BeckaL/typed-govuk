import { renderBasedOnSchema } from './rendering-router.js';
import { renderIndex } from './renderers/pages/index.js';
import Koa from 'koa';
import KoaRouter from 'koa-router';

const app = new Koa();
const router = new KoaRouter();

router.get('/', (ctx) => {
    ctx.body = renderIndex();
}).get('/government/:type/:name', (ctx) => {
    return renderBasedOnSchema(`/government/${ctx.params.type}/${ctx.params.name}`).then(html => {ctx.body = html})
});

app.use(router.routes())

app.listen(3000)