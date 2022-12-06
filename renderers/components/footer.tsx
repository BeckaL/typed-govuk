import * as React from 'react';
import { parse } from 'yaml';
import fs from 'fs';

type Item = {
    label: String,
    href: String
}

type NavigationLink = {
    label: String,
    menu_contents: Item[]
}

const getNavLinks = (): NavigationLink[] => {
    const file = fs.readFileSync('./data/en.yml', 'utf8');
    return parse(file).en.components.layout_super_navigation_header.navigation_links as NavigationLink[]
}

export const footer = () => {
    return <footer className="gem-c-layout-footer govuk-footer gem-c-layout-footer--border">
        <div className="govuk-width-container">
            <div className="govuk-footer__navigation" data-module="gem-track-click" data-track-links-only>
                { navigationLinksDiv( getNavLinks()) }
            </div>
        </div>
    </footer>
}

const navigationLinksDiv = (links: NavigationLink[]) => {
    return links.map( l => 
        <div className={ `${columnWidthClass(columnNo(l.label))}  govuk-!-display-none-print` }>
            <h2 className="govuk-footer__heading govuk-heading-m">{l.label}</h2>
            <ul className={ listClasses(columnNo(l.label)) }>
                { l.menu_contents.map( (i: Item ) => 
                    <li className="govuk-footer__list-item">
                        <a href={ i.href } className="govuk-footer__link">{ i.label }</a>
                    </li>
                ) }
            </ul>
        </div>
        )
}

const columnNo = (title: String): number => (title === "Topics")? 2 : 1

const listClasses = (noOfColumns: number): String => `govuk-footer__list govuk-footer__list--columns-${noOfColumns}}`

const columnWidthClass= (noOfColumns: number): string => {
    switch (noOfColumns) {
        case 2:
            return "govuk-grid-column-two-thirds"
        case 3:
            return "govuk-grid-column-full"
        default:
            return "govuk-grid-column-one-third"
    }
}