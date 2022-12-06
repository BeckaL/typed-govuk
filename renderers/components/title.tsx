import * as React from 'react'

export const title = (t: String, documentType: String) => {
    return <div className="gem-c-title govuk-!-margin-top-8 govuk-!-margin-bottom-8">
              <span className="govuk-caption-xl gem-c-title__context">{documentType}</span>
               <h1 className="govuk-heading-xl gem-c-title__text">{t}</h1>
           </div>
}