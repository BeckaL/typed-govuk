import * as React from 'react'
import { Schema as TopicalEventSchema } from './topical-event'
import { renderToStaticMarkup } from "react-dom/server";
import Koa from 'koa';
import KoaRouter from 'koa-router';

const app = new Koa();
const router = new KoaRouter();

const getTopicalEvent = async (name: string) => {
    const contentItem: TopicalEventSchema = await fetch(`https://www.gov.uk/api/content/government/topical-events/${name}`)
        .then(resp => resp.json());
    return renderToStaticMarkup(
        <div>
          <h1>{contentItem.title}</h1>
          <p>Updated at: {contentItem.public_updated_at}</p>
        </div>
    )
}

router.get('/', (ctx, _) => {
    ctx.body = `Go to a gov.uk base path i.e /government/topical-events/budget-2021 to see something rendered`;
}).get('/government/topical-events/:topical_event_name', (ctx, _) => {
    return getTopicalEvent(ctx.params.topical_event_name).then(html => {ctx.body = html})
}
);

app.use(router.routes())

app.listen(3000)