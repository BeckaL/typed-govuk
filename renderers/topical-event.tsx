import { Schema as TopicalEventSchema } from '../compiled-schemas/topical_event'
import { title } from "./components/title.js"
import * as React from 'react'
import { renderPage } from './renderPage.js';
import { toTitleCase } from './utils.js'

export const renderTopicalEvent = (contentItem: TopicalEventSchema) => {
  return renderPage((
    <div>
      {title(contentItem.title, toTitleCase(contentItem.document_type))}
      <p>Updated at: {contentItem.public_updated_at}</p>
    </div>
  ))
}