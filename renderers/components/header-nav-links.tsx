import * as React from 'react'
import { NavigationLink, NavigationLinkItem } from '../../model/NavigationLinks.js'
import { parameterize } from '../utils.js'

export const renderHeaderNavLinks = (navigationLinks: NavigationLink[]) => {
    return navigationLinks.map((link, index) => renderNavLink(link, index))
}

const renderNavLink = (link: NavigationLink, index: number) => {
    const hasChildren = link.menu_contents.length > 0;
    const liClasses = ["gem-c-layout-super-navigation-header__navigation-item"]
    if (hasChildren) { liClasses.push("gem-c-layout-super-navigation-header__navigation-item--with-children") }
    const uniqueId = index; //TODO
    const showMenuText = false; //TODO
    const hideMenuText = false; //TODO

    return <li className={liClasses.join(" ")} key={index}>
        <div className="gem-c-layout-super-navigation-header__navigation-toggle-wrapper govuk-clearfix">
            <a href={link.href} className="gem-c-layout-super-navigation-header__navigation-item-link" hidden="hidden">
                <span className="gem-c-layout-super-navigation-header__navigation-item-link-inner">{link.label}</span>
            </a>
            {renderInner(link, hasChildren, uniqueId)}
        </div>
        {renderItems(link, hasChildren, uniqueId)}
    </li>
}

const renderInner = (link: NavigationLink, hasChildren: boolean, id: number) => {
    if (hasChildren) {
        return (
            <button
                aria-controls={`super-navigation-menu__section-${id}`}
                aria-expanded="false"
                aria-label="Show Topics menu"
                className="gem-c-layout-super-navigation-header__navigation-second-toggle-button"
                data-text-for-hide={`Hide ${link.label} menu`}
                data-text-for-show={`Show ${link.label} menu`}
                data-toggle-desktop-group="top"
                data-toggle-mobile-group="second"
                data-tracking-key="topics"
                id={`super-navigation-menu__section-${id}-toggle`} type="button">
                <span className="gem-c-layout-super-navigation-header__navigation-second-toggle-button-inner">{link.label}</span>
            </button>)
    } else {
        return <></>
    }
}

const renderItems = (link: NavigationLink, hasChildren: boolean, id: number) => {
    return <div hidden={true} className="gem-c-layout-super-navigation-header__navigation-dropdown-menu" id={`super-navigation-menu__section-${id}`}>
        <div className="govuk-width-container gem-c-layout-super-navigation-header__width-container">
            <div className="govuk-grid-row">
                <div className="govuk-grid-column-one-third-from-desktop">
                    <h3 className="govuk-body-l gem-c-layout-super-navigation-header__menu-description">{link.description} </h3>
                </div>
                <div className="govuk-grid-column-two-thirds-from-desktop">
                    <ul className={`gem-c-layout-super-navigation-header__navigation-second-items gem-c-layout-super-navigation-header__navigation-second-items--${parameterize(link.label)}`}>
                        {menuContents(link.menu_contents)}
                    </ul>
                </div>
            </div>
        </div>
    </div>
}

const menuContents = (menuContents: NavigationLinkItem[]) => {
    const linkClasses = "govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link"

    return menuContents.map((item, index) =>
        <li className="gem-c-layout-super-navigation-header__dropdown-list-item" key={index}>
            <a href={item.href} className={linkClasses}>{item.label}</a>
        </li>
    )
}

