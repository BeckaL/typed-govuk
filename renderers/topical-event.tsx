import { TopicalEventSchema } from '../schemas/compiled/topical-event'
import { title } from "./components/title.js"
import * as React from 'react'
import { renderPage } from './renderPage.js';

export const renderTopicalEvent = (contentItem: TopicalEventSchema) => {
  return renderPage((
    <div>
      {title(contentItem.title)}
      <p>Updated at: {contentItem.public_updated_at}</p>
    </div>
  ))
}