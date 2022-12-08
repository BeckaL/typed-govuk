import * as React from 'react';
import { Navigationlink2 } from '../../compiled-translations/en';
import { getNavLinks } from '../utils.js';

export const footer = () => {
    return <footer className="gem-c-layout-footer govuk-footer gem-c-layout-footer--border">
        <div className="govuk-width-container">
            <div className="govuk-footer__navigation" data-module="gem-track-click" data-track-links-only>
                { navigationLinksDiv( getNavLinks()) }
            </div>
            <hr className="govuk-footer__section-break"/>
            { footerMeta }
        </div>
    </footer>
}

const navigationLinksDiv = (links: Navigationlink2[]) => {
    return React.Children.toArray(links.map( l => 
        <div className={ `${columnWidthClass(columnNo(l.label))}  govuk-!-display-none-print` }>
            <h2 className="govuk-footer__heading govuk-heading-m">{l.label}</h2>
            <ul className={ listClasses(columnNo(l.label)) }>
                { React.Children.toArray(l.menu_contents.map((item, index) => 
                    <li className="govuk-footer__list-item" key={index}>
                        <a href={ item.href } className="govuk-footer__link">{ item.label }</a>
                    </li>
                )) }
            </ul>
        </div>
    ))
}

const columnNo = (title: String): number => (title === "Topics")? 2 : 1

const listClasses = (noOfColumns: number): string => `govuk-footer__list govuk-footer__list--columns-${noOfColumns}}`

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

const footerMeta = (<div className="govuk-footer__meta">
      <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
          <h2 className="govuk-visually-hidden">Support links</h2>
          <ul className="govuk-footer__inline-list govuk-!-display-none-print" data-module="gem-track-click" data-track-links-only="" data-gem-track-click-module-started="true">
              <li className="govuk-footer__inline-list-item">
                <a className="govuk-footer__link" data-track-category="footerClicked" data-track-action="supportLink" data-track-label="/help" data-track-options="{&quot;dimension29&quot;:&quot;Help&quot;}" href="/help">Help</a>
              </li>
              <li className="govuk-footer__inline-list-item">
                <a className="govuk-footer__link" data-track-category="footerClicked" data-track-action="supportLink" data-track-label="/help/privacy-notice" data-track-options="{&quot;dimension29&quot;:&quot;Privacy&quot;}" href="/help/privacy-notice">Privacy</a>
              </li>
              <li className="govuk-footer__inline-list-item">
                <a className="govuk-footer__link" data-track-category="footerClicked" data-track-action="supportLink" data-track-label="/help/cookies" data-track-options="{&quot;dimension29&quot;:&quot;Cookies&quot;}" href="/help/cookies">Cookies</a>
              </li>
              <li className="govuk-footer__inline-list-item">
                <a className="govuk-footer__link" data-track-category="footerClicked" data-track-action="supportLink" data-track-label="/help/accessibility-statement" data-track-options="{&quot;dimension29&quot;:&quot;Accessibility statement&quot;}" href="/help/accessibility-statement">Accessibility statement</a>
              </li>
              <li className="govuk-footer__inline-list-item">
                <a className="govuk-footer__link" data-track-category="footerClicked" data-track-action="supportLink" data-track-label="/contact" data-track-options="{&quot;dimension29&quot;:&quot;Contact&quot;}" href="/contact">Contact</a>
              </li>
              <li className="govuk-footer__inline-list-item">
                <a className="govuk-footer__link" data-track-category="footerClicked" data-track-action="supportLink" data-track-label="/help/terms-conditions" data-track-options="{&quot;dimension29&quot;:&quot;Terms and conditions&quot;}" href="/help/terms-conditions">Terms and conditions</a>
              </li>
              <li className="govuk-footer__inline-list-item">
                <a className="govuk-footer__link" lang="cy" data-track-category="footerClicked" data-track-action="supportLink" data-track-label="/cymraeg" data-track-options="{&quot;dimension29&quot;:&quot;Rhestr o Wasanaethau Cymraeg&quot;}" href="/cymraeg">Rhestr o Wasanaethau Cymraeg</a>
              </li>
              <li className="govuk-footer__inline-list-item">
                <a className="govuk-footer__link" data-track-category="footerClicked" data-track-action="supportLink" data-track-label="/government/organisations/government-digital-service" data-track-options="{&quot;dimension29&quot;:&quot;Government Digital Service&quot;}" href="/government/organisations/government-digital-service">Government Digital Service</a>
              </li>
          </ul>
        <svg aria-hidden="true" focusable="false" className="govuk-footer__licence-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 483.2 195.7" height="17" width="41">
          <path fill="currentColor" d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145"></path>
        </svg>
        <span className="govuk-footer__licence-description" data-module="gem-track-click" data-track-action="copyrightLink" data-track-category="footerClicked" data-track-label="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" data-track-options="{&quot;dimension29&quot;: &quot;Open Government Licence v3.0&quot;}" data-track-links-only="" data-gem-track-click-module-started="true">
          All content is available under the <a className="govuk-footer__link" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>, except where otherwise stated
        </span>
      </div>
      <div className="govuk-footer__meta-item" data-module="gem-track-click" data-track-action="copyrightLink" data-track-category="footerClicked" data-track-label="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/" data-track-options="{&quot;dimension29&quot;: &quot;© Crown copyright&quot;}" data-track-links-only="" data-gem-track-click-module-started="true">
        <a className="govuk-footer__link govuk-footer__copyright-logo" href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/">© Crown copyright</a>
      </div>
    </div>)