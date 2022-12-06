import * as React from 'react'
import DOMPurify from 'isomorphic-dompurify';

export const renderGovspeakElem = (htmlString: string) => 
    <div className="gem-c-govspeak govuk-govspeak" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlString)}} />
