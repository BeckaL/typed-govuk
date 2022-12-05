import * as React from 'react'
import { TopicalEventSchema } from './schemas/compiled/topical-event'
import { CaseStudySchema} from './schemas/compiled/case-study'
import { renderToStaticMarkup } from "react-dom/server";
import Koa from 'koa';
import KoaRouter from 'koa-router';
import { Context } from 'koa';

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

const renderTopicalEvent = (contentItem: TopicalEventSchema) => {
    return renderToStaticMarkup(
        <div>
          <h1>{contentItem.title}</h1>
          <p>Updated at: {contentItem.public_updated_at}</p>
        </div>
    )
}

const renderNotFound = (schemaName: String) => {
    return renderToStaticMarkup(
        <div>
          <p>Schema {schemaName} not found</p>
        </div>
    )
}

const renderCaseStudy = (contentItem: CaseStudySchema) => {
    return renderToStaticMarkup(
        <div>
          <h1>{contentItem.title}</h1>
          <p>Updated at: {contentItem.public_updated_at}</p>
        </div>
    )
}


const renderBasedOnSchema = async (path: String) => {
    const json = await fetch(`https://www.gov.uk/api/content/${path}`).then(resp => resp.json());
    const schemaName = json["schema_name"]
    const schemaNamesToRenderFunctions = {
        "topical_event": renderTopicalEvent(json as TopicalEventSchema),
        "case_study": renderCaseStudy(json as CaseStudySchema)
    };  
    if (schemaName in schemaNamesToRenderFunctions) { return schemaNamesToRenderFunctions[schemaName] } else { return renderNotFound(schemaName) }
}

const renderIndex = () => {
    return renderToStaticMarkup(
        <div>
          <h1>Have a look at some example rendered schemas:</h1>
          <p><a href='/government/topical-events/budget-2021'>Topical event</a></p>
          <p><a href='/government/case-studies/smartsurvey-working-with-department-for-education'>Case study</a></p>
        </div>
    )
}

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