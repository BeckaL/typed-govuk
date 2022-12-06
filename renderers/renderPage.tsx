import { header } from "./components/header.js"
import { footer } from "./components/footer.js"
import { title } from "./components/title.js"
import * as React from 'react'
import { renderToStaticMarkup } from "react-dom/server";

export const renderPage = (page) => {
    const applicationStylesheet = "https://www.gov.uk/assets/static/application-2ff816c36affa8947857ec173cb86a848ca6559ef267a9245df61d2aa326f2df.css"
    const collectionsStylesheet = "https://www.gov.uk/assets/collections/application-07cc5dfda62258efd4b102a4e531e8d833f12007897649b6ef1045f9848e2d08.css"
    // const printStylesheet ="/assets/static/print-e46a9d924a5eedb529468b565b8b5a1b308f218f19f0afc6998d0f295b24af48.css"
      return renderToStaticMarkup(
          <div>
            <head>
               <link rel="stylesheet" href={applicationStylesheet}/>
               <link rel="stylesheet" href={collectionsStylesheet}></link>
               <link rel="stylesheet" href="https://www.gov.uk/assets/collections/print-598f63aee18f69311a4d2571d2f75e5f78bf28192c2c54ff6735061827c8abd9.css" media="print"/>
               <link rel="stylesheet" href="https://www.gov.uk/assets/static/print-e46a9d924a5eedb529468b565b8b5a1b308f218f19f0afc6998d0f295b24af48.css" media="print"/>
             </head>
            { header() }
            { page }
            { footer() }
          </div>
      )
  }