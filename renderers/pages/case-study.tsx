import * as React from 'react';
import { Schema as CaseStudySchema } from '../../compiled-schemas/case_study';
import { renderPage } from "../renderPage.js";

export const renderCaseStudy = (contentItem: CaseStudySchema) => {
    return renderPage(
        <div>
          <h1>{contentItem.title}</h1>
          <p>Updated at: {contentItem.public_updated_at}</p>
        </div>
    )
}