import { Schema as SpeechSchema } from '../compiled-schemas/speech'
import { title } from "./components/title.js"
import * as React from 'react'
import { renderPage } from './renderPage.js';
import { renderGovspeakElem } from './components/govspeak.js'
import { renderFigure } from './components/figure.js'
import { Links as SpeechSchemaLinks } from '../compiled-schemas/links/speech_links';
import { toTitleCase, displayableDate } from './utils.js'

export const renderSpeech = (contentItem: SpeechSchema, links: SpeechSchemaLinks) => {
  return renderPage((
    <div>
      <div className="govuk-grid-row">
        {title(contentItem.title, toTitleCase(contentItem.document_type))}
        <div className="govuk-grid-column-two-thirds">
          <div className="gem-c-lead-paragraph">
            <p>{contentItem.description}</p>
          </div>
        </div>
        {metadata(contentItem, links)}
        {body(contentItem)}
        {relatedTopics((contentItem))}
      </div>
    </div>
  ))
}

const body = (contentItem: SpeechSchema) => {
  return (<div className="govuk-grid-row">
    <div className="govuk-grid-column-two-thirds">
      <div className="content-bottom-margin"></div>
      <div className="responsive-bottom-margin">
        {locationAndDeliveredOn(contentItem.details.delivered_on, contentItem.details.location)}
        {image(contentItem)}
        {renderGovspeakElem(contentItem.details.body)}
      </div>
      <div className="app-c-published-dates" lang="en">Published {displayableDate(contentItem.details.delivered_on)}</div>
    </div>
  </div>)
}

const locationAndDeliveredOn = (deliveredOn: string, location?: string) => {
  if (location != undefined) {
    return (<div className="app-c-important-metadata app-c-important-metadata--bottom-margin">
      <dl className="app-c-important-metadata__list" data-module="gem-track-click" data-gem-track-click-module-started="true">
        <dt className="app-c-important-metadata__term">Location: </dt>
        <dd className="app-c-important-metadata__definition">{location}</dd>
        <dt className="app-c-important-metadata__term">Delivered on: </dt>
        <dd className="app-c-important-metadata__definition">{displayableDate(deliveredOn)}</dd>
      </dl>
    </div>)
  } else {
    return (<div className="app-c-important-metadata app-c-important-metadata--bottom-margin">
      <dl className="app-c-important-metadata__list" data-module="gem-track-click" data-gem-track-click-module-started="true">
        <dt className="app-c-important-metadata__term">Delivered on: </dt>
        <dd className="app-c-important-metadata__definition">{displayableDate(deliveredOn)}</dd>
      </dl>
    </div>)
  }
}

const image = (contentItem: SpeechSchema) => {
  if (contentItem.details.image) {
    return renderFigure(contentItem.details.image.url, contentItem.details.image.alt_text, contentItem.details.image.caption, contentItem.details.image.credit)
  } else {
    <></>
  }
}

//TODO: can't really use links schema here - have to convert back to object which kind of defeats the... object
const metadata = (contentItem: SpeechSchema, links: SpeechSchemaLinks) => {
  return <div className="govuk-grid-row">
    <div className="metadata-logo-wrapper">
      <div className="govuk-grid-column-two-thirds metadata-column">
        <div className="gem-c-metadata" >
          <dl >
            <dt className="gem-c-metadata__term">From:</dt>
            <dd className="gem-c-metadata__definition">
              <a className="govuk-link"
                href={(links.links.original_primary_publishing_organisation[0] as Object)["base_path"]}>
                {(links.links.original_primary_publishing_organisation[0] as Object)["title"]}
              </a> and <a className="govuk-link" href={(links.links.people[0] as Object)["base_path"]}>
                {(links.links.people[0] as Object)["title"]}
              </a>
            </dd>
            <dt className="gem-c-metadata__term">Published</dt>
            <dd className="gem-c-metadata__definition">{displayableDate(contentItem.first_published_at)}</dd>
          </dl>
        </div>
      </div>
      <div className="govuk-grid-column-one-third">
      </div>
    </div>
  </div>


}

const relatedTopics = (links: SpeechSchemaLinks) => {
  const taxons = links.links.taxons.map(t => t as Object)
  if (taxons.length == 0) {
    return <></>
  } else {
    return <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">
        <div className="gem-c-contextual-footer">
          <div className="gem-c-related-navigation">
            <nav role="navigation" className="gem-c-related-navigation__nav-section" aria-labelledby="related-nav-topics-0d47e26a" data-module="gem-toggle" data-gem-toggle-module-started="true">
              <h2 id="related-nav-topics-0d47e26a" className="gem-c-related-navigation__sub-heading gem-c-related-navigation__sub-heading--footer" data-track-count="footerRelatedItemSection">Explore the topic</h2>
              <ul className="gem-c-related-navigation__link-list" data-module="gem-track-click" data-gem-track-click-module-started="true">
                {relatedTaxons(taxons)}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  }
}

const relatedTaxons = (taxons: Object[]) => {
  return taxons.map(taxonObject =>
    <li className="gem-c-related-navigation__link">
      <a
        className="govuk-link govuk-link gem-c-related-navigation__section-link govuk-link gem-c-related-navigation__section-link--footer"
        href={taxonObject["base_path"]}
      >{taxonObject["title"]}</a>
    </li>
  )
}