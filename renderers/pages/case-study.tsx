import * as React from 'react';
import { Schema as CaseStudySchema } from '../../compiled-schemas/case_study';
import { titleAndDescription } from '../components/title-and-description.js';
import { renderPage } from "../renderPage.js";

export const renderCaseStudy = (contentItem: CaseStudySchema) => {
    return renderPage(
        <div>
        { titleAndDescription(contentItem.title, contentItem.document_type, contentItem.description as string) }
      </div>
    )
}