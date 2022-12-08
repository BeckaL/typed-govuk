import * as React from 'react'

import { renderPage } from '../renderPage.js'

export const renderNotFound = (schemaName: String) => {
    return renderPage(
        <div>
          <p>Schema {schemaName} not found</p>
        </div>
    )
}