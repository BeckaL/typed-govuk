import { renderBasedOnSchema, renderIndex } from './renderer.js';
import Koa from 'koa';
import KoaRouter from 'koa-router';

const app = new Koa();
const router = new KoaRouter();


router.get('/', (ctx) => {
    ctx.body = renderIndex();
}).get('/government/topical-events/:topical_event_name', (ctx) => {
    return renderBasedOnSchema(`/government/topical-events/${ctx.params.topical_event_name}`).then(html => {ctx.body = html})
}).get('/world/:location/news', (ctx) => {
    return renderBasedOnSchema(`/world/${ctx.params.location}/news`).then(html => {ctx.body = html})
}).get('/government/case-studies/:case_study_name', (ctx) => {
    return renderBasedOnSchema(`/government/case-studies/${ctx.params.case_study_name}`).then(html => {ctx.body = html})
}).get('/government/speeches/:speech_name', (ctx) => {
    return renderBasedOnSchema(`/government/speeches/${ctx.params.speech_name}`).then(html => {ctx.body = html})
});

app.use(router.routes())

app.listen(3000)