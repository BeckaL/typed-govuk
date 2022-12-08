import * as React from 'react'
import { toTitleCase } from '../utils.js'
import { getFrontendTranslations } from '../utils.js'

export const titleAndDescription = (title: string, documentType: string, description: string) => {
    return <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
            <div className="gem-c-title govuk-!-margin-top-8 govuk-!-margin-bottom-8">
                <span className="govuk-caption-xl gem-c-title__context">{ displayDocumentType(documentType) }</span>
                <h1 className="govuk-heading-xl gem-c-title__text">{ toTitleCase(title) }</h1>
            </div>
        </div>
        <div className="govuk-grid-column-two-thirds">
            <div className="gem-c-lead-paragraph">
                <p>{ description }</p>
            </div>
        </div>
    </div>
}

const displayDocumentType = (docType: string): string => {
    const translations = getFrontendTranslations()
    //this isn't safe
    return translations.en.content_item.schema_name[docType].one
}