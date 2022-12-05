import { renderBasedOnSchema, renderIndex } from './renderer.js';
import Koa from 'koa';
import KoaRouter from 'koa-router';
var app = new Koa();
var router = new KoaRouter();
router.get('/', function (ctx, _) {
    ctx.body = renderIndex();
}).get('/government/topical-events/:topical_event_name', function (ctx, _) {
    return renderBasedOnSchema("/government/topical-events/".concat(ctx.params.topical_event_name)).then(function (html) { ctx.body = html; });
}).get('/world/:location/news', function (ctx, _) {
    return renderBasedOnSchema("/world/".concat(ctx.params.location, "/news")).then(function (html) { ctx.body = html; });
}).get('/government/case-studies/:case_study_name', function (ctx, _) {
    return renderBasedOnSchema("/government/case-studies/".concat(ctx.params.case_study_name)).then(function (html) { ctx.body = html; });
});
app.use(router.routes());
app.listen(3000);
