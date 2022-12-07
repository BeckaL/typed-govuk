import { Schema as SpeechSchema } from '../compiled-schemas/speech'
import { title } from "./components/title.js"
import * as React from 'react'
import { renderPage } from './renderPage.js';
import { renderGovspeakElem } from './components/govspeak.js'
import { renderFigure } from './components/figure.js'
import { Links as SpeechSchemaLinks } from '../compiled-schemas/links/speech_links';

export const renderSpeech = (contentItem: SpeechSchema, links: SpeechSchemaLinks) => {
  return renderPage((
    <div>
      {title(contentItem.title, toTitleCase(contentItem.document_type))}
      <div className="gem-c-lead-paragraph"><p>{contentItem.description}</p></div>

      {metadata(contentItem, links)}

      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <div className="content-bottom-margin"></div>
          <div className="responsive-bottom-margin">
            {locationAndDeliveredOn(contentItem.details.delivered_on, contentItem.details.location)}
            {image(contentItem)}
            {renderGovspeakElem(contentItem.details.body)}
          </div>
        </div>
      </div>
    </div>
  ))
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

const displayableDate = (dateString: string) => {
  const date = new Date(dateString)
    return [
      date.getDate(),
      date.toLocaleString('default', { month: 'long' }),
      date.getFullYear(),
    ].join(' ');
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


//TODO move somewhere shared
const toTitleCase = (s: String): String => {
  return s.replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())       // Initial char (after -/_)
    .replace(/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase())
}