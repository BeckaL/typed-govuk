import { Schema as SpeechSchema } from '../compiled-schemas/speech'
import { title } from "./components/title.js"
import * as React from 'react'
import { renderPage } from './renderPage.js';
import { renderGovspeakElem } from './components/govspeak.js'
import { renderFigure } from './components/figure.js'

export const renderSpeech = (contentItem: SpeechSchema) => {
  return renderPage((
    <div>
      {title(contentItem.title, toTitleCase(contentItem.document_type))}
      <div className = "gem-c-lead-paragraph"><p>{contentItem.title}</p></div>

      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <div className="content-bottom-margin"></div>
            <div className="responsive-bottom-margin">
                { image(contentItem)}
                {renderGovspeakElem(contentItem.details.body)}
            </div>
          </div>
        </div>
      </div>
  ))
}

const image = (contentItem: SpeechSchema) => {
    if (contentItem.details.image) {
        return renderFigure(contentItem.details.image.url, contentItem.details.image.alt_text, contentItem.details.image.caption, contentItem.details.image.credit)
    }
} 


//TODO move somewhere shared
const toTitleCase = (s: String): String => {
    return s.replace (/^[-_]*(.)/, (_, c) => c.toUpperCase())       // Initial char (after -/_)
     .replace (/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase())
  }