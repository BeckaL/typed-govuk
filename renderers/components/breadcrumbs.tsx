import * as React from 'react';
import { BreadcrumbLink } from '../../model/BreadcrumbLink';

export const renderBreadcrumbs = (breadcrumbLinks: BreadcrumbLink[]) => {
    return <div className="wrapper govuk-width-container">
        <div className="gem-c-breadcrumbs govuk-breadcrumbs govuk-breadcrumbs--collapse-on-mobile" data-module="gem-track-click">
            <ol className="govuk-breadcrumbs__list">
                { innerList(breadcrumbLinks) }
            </ol>
        </div>
    </div>
}

const innerList = (breadcrumbLinks: BreadcrumbLink[]) => {
    return breadcrumbLinks.map((b, index) =>
        <li className="govuk-breadcrumbs__list-item" key={index}>
            <a href={b.path}>{b.title}</a>
        </li>
    )
}