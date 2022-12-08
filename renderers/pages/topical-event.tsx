import { Description, Image, Schema as TopicalEventSchema } from '../../compiled-schemas/topical_event'
import { titleAndDescription } from "../components/title-and-description.js"
import * as React from 'react'
import { renderPage } from '../renderPage.js';
import { taxonBreadcrumbs, toTitleCase, truncate } from '../utils.js'
import { Links as TopicalEventLinks } from '../../compiled-schemas/links/topical_event_links';
import { Taxon } from '../../model/Taxon';

export const renderTopicalEvent = (contentItem: TopicalEventSchema, links: TopicalEventLinks) => {

  return renderPage((
    <div>
      {titleAndDescription(contentItem.title, contentItem.document_type, contentItem.description as Description)}
      <hr className="govuk-section-break govuk-section-break--m govuk-section-break--visible topical-events__section-break" />
      {renderFeaturedDocuments(contentItem.details.ordered_featured_documents!)}
    </div>
  ))
}

type FeaturedDocument = {
  href: string,
  image: Image,
  summary: string,
  title: string
}

const featuredDocs = (row: FeaturedDocument[]) => {
  return row.map(doc =>
    <div className="govuk-grid-column-one-third">
      <div className="gem-c-image-card ">
        <div className="gem-c-image-card__text-wrapper">
          <div className="gem-c-image-card__header-and-context-wrapper">
            <h2 className="gem-c-image-card__title govuk-heading-s">
              <a className="gem-c-image-card__title-link govuk-link" href={doc.href}>{doc.title}</a>
            </h2>
          </div>
          <div className="gem-c-image-card__description">{truncate(doc.summary, 160)}</div>
        </div>
        <figure className="gem-c-image-card__image-wrapper">
          <image className="gem-c-image-card__image"
            alt={doc.image.url}
            loading="auto"
            height="200"
            width="300"
            src={doc.image.url} />
        </figure>
      </div>
    </div>
  )
}

const renderFeaturedDocuments = (docs: FeaturedDocument[]) => {
  return <section id="featured">
    <h2 className="gem-c-heading govuk-heading-l gem-c-heading--padding gem-c-heading--border-top-2 govuk-!-margin-bottom-4">Featured</h2>
    <div className="govuk-grid-row">

      {featuredDocs(docs.slice(0, 3))}
      {featuredDocs(docs.slice(3, 5))}
    </div>
    </section >
} 