import { Schema as SpeechSchema } from '../compiled-schemas/speech'
import { title } from "./components/title.js"
import * as React from 'react'
import { renderPage } from './renderPage.js';
import { renderGovspeakElem } from './components/govspeak.js'

export const renderSpeech = (contentItem: SpeechSchema) => {
  return renderPage((
    <div>
      {title(contentItem.title, toTitleCase(contentItem.document_type))}
      <div className = "gem-c-lead-paragraph"><p>{contentItem.title}</p></div>

      <div class="govuk-grid-row">
        <div class="govuk-grid-column-two-thirds">
          <div class="content-bottom-margin"></div>
            <div class="responsive-bottom-margin">
                {renderGovspeakElem(contentItem.details.body)}
            </div>
          </div>
        </div>
      </div>
  ))
}


//TODO move somewhere shared
const toTitleCase = (s: String): String => {
    return s.replace (/^[-_]*(.)/, (_, c) => c.toUpperCase())       // Initial char (after -/_)
     .replace (/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase())
  }