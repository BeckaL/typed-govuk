import * as React from 'react';

import { renderPage } from "../renderPage.js";

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