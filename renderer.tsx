import * as React from 'react';

import { Schema as CaseStudySchema } from './compiled-schemas/case_study';
import { Links as SpeechSchemaLinks } from './compiled-schemas/links/speech_links';
import { Schema as SpeechSchema } from './compiled-schemas/speech';
import { Schema as TopicalEventSchema } from './compiled-schemas/topical_event';
import { renderCaseStudy } from './renderers/pages/case-study.js';
import { renderNotFound } from './renderers/pages/not-found.js';
import { renderSpeech } from './renderers/pages/speech.js';
import { renderPage } from "./renderers/renderPage.js";
import { renderTopicalEvent } from './renderers/pages/topical-event.js';

export const renderIndex = () => {
  return renderPage(
    <div>
      <h1 className="govuk-heading-xl">Have a look at some example rendered schemas:</h1>
      <p><a href='/government/topical-events/budget-2021'>Topical event</a></p>
      <p><a href='/government/case-studies/smartsurvey-working-with-department-for-education'>Case study</a></p>
      <p><a href='/government/speeches/deadline-extended-for-the-a1-northumberland-morpeth-to-ellingham-dco-decision'>Speech</a></p>
    </div>
  )
}

export const renderBasedOnSchema = async (path: String) => {
  const json = await fetch(`https://www.gov.uk/api/content/${path}`).then(resp => resp.json());
  const schemaName = json["schema_name"]

  switch (schemaName) {
    case "topical_event":
      return renderTopicalEvent(json as TopicalEventSchema)
    case "speech":
      return renderSpeech(json as SpeechSchema, json as SpeechSchemaLinks)
    case "case_study":
      return renderCaseStudy(json as CaseStudySchema)
    default:
      return renderNotFound(schemaName)
  }
}