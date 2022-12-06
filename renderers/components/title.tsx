import * as React from 'react'

export const title = (t: String) => {
    const average_title_length = false
    const context = false
    const context_locale = false
    const context_inside = false
    const inverse = false

    return <div className="gem-c-title govuk-!-margin-top-8 govuk-!-margin-bottom-8">
               <h1 className="govuk-caption-xl gem-c-title__text">{t}</h1>
           </div>
}