import { header } from "./components/header.js"
import { footer } from "./components/footer.js"
import { title } from "./components/title.js"
import * as React from 'react'
import { renderToStaticMarkup } from "react-dom/server";

export const renderPage = (page) => {
    const applicationStylesheet = "https://www.gov.uk/assets/static/application-2ff816c36affa8947857ec173cb86a848ca6559ef267a9245df61d2aa326f2df.css"
    const collectionsStylesheet = "https://www.gov.uk/assets/collections/application-07cc5dfda62258efd4b102a4e531e8d833f12007897649b6ef1045f9848e2d08.css"
      return renderToStaticMarkup(
          <html>
            <head>
               <link rel="stylesheet" href={applicationStylesheet} media="all"/>
               <link rel="stylesheet" href={collectionsStylesheet} media="all"/>
             </head>
             <body className="gem-c-layout-for-public govuk-template__body">
              { header() }
              <div className="wrapper govuk-width-container">
                <div className="gem-c-breadcrumbs govuk-breadcrumbs govuk-breadcrumbs--collapse-on-mobile" data-module="gem-track-click">
                  <ol class="govuk-breadcrumbs__list">
                        <li class="govuk-breadcrumbs__list-item">
                          <a data-track-category="homeLinkClicked" data-track-action="homeBreadcrumb" data-track-label="" data-track-options="{}" class="govuk-breadcrumbs__link" href="/">Home</a>
                        </li>
                  </ol>
                </div>
                <main role="main" className="content topical-events-show">
                  { page }
                </main>
              </div>
              { footer() }
             </body>
          </html>
      )
  }