import { Description, Schema as TopicalEventSchema } from '../../compiled-schemas/topical_event'
import { titleAndDescription } from "../components/title-and-description.js"
import * as React from 'react'
import { renderPage } from '../renderPage.js';
import { toTitleCase } from '../utils.js'

export const renderTopicalEvent = (contentItem: TopicalEventSchema) => {
  return renderPage((
    <div>
      { titleAndDescription(contentItem.title, contentItem.document_type, contentItem.description as Description) }
    </div>
  ))
}