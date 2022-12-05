import { renderBasedOnSchema, renderIndex } from './renderer.js';
import Koa from 'koa';
import KoaRouter from 'koa-router';
import { Context } from 'koa';

const app = new Koa();
const router = new KoaRouter();


router.get('/', (ctx: Context, _) => {
    ctx.body = renderIndex();
}).get('/government/topical-events/:topical_event_name', (ctx: Context, _) => {
    return renderBasedOnSchema(`/government/topical-events/${ctx.params.topical_event_name}`).then(html => {ctx.body = html})
}).get('/world/:location/news', (ctx: Context, _) => {
    return renderBasedOnSchema(`/world/${ctx.params.location}/news`).then(html => {ctx.body = html})
}).get('/government/case-studies/:case_study_name', (ctx: Context, _) => {
    return renderBasedOnSchema(`/government/case-studies/${ctx.params.case_study_name}`).then(html => {ctx.body = html})
});

app.use(router.routes())

app.listen(3000)