import * as React from 'react'
import { NavigationLink, NavigationLinkItem } from './NavigationLinks.js'

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

    return <li className={liClasses}>
        <div class="gem-c-layout-super-navigation-header__navigation-toggle-wrapper govuk-clearfix">
            <a href={link.href} className="gem-c-layout-super-navigation-header__navigation-item-link">
                <span class="gem-c-layout-super-navigation-header__navigation-item-link-inner">{link.label}</span>
            </a>
            {renderInner(link, hasChildren, uniqueId)}
        </div>
        {renderItems(link, hasChildren, uniqueId)}
    </li>
}

const renderInner = (link: NavigationLink, hasChildren: boolean, id: number) => {
    if (hasChildren) {
        return (<button
            className="gem-c-layout-super-navigation-header__navigation-second-toggle-button"
            hidden="false" id={`super-navigation-menu__section-${id}-toggle`}
            type="button"
            aria-controls={`super-navigation-menu__section-${id}`}
            aria-expanded="false"
            aria-label={`Show ${link.label} menu`}>
            <span className="gem-c-layout-super-navigation-header__navigation-second-toggle-button-inner">{link.label}</span>
        </button>)
    } else {
        return <></>
    }
}

const renderItems = (link: NavigationLink, hasChildren: boolean, id: number) => {
    return <div hidden="true" class="gem-c-layout-super-navigation-header__navigation-dropdown-menu" id={`super-navigation-menu__section-${id}`}>
        <div class="govuk-width-container gem-c-layout-super-navigation-header__width-container">
            <div class="govuk-grid-row">
                <div class="govuk-grid-column-one-third-from-desktop">
                    <h3 class="govuk-body-l gem-c-layout-super-navigation-header__menu-description">{link.description} </h3>
                </div>
            </div>
            <div class="govuk-grid-column-two-thirds-from-desktop">
                <ul class="gem-c-layout-super-navigation-header__navigation-second-items gem-c-layout-super-navigation-header__navigation-second-items--<%= link[:label].parameterize %>">
                    {menuContents(link.menu_contents)}
                </ul>
            </div>
        </div>
    </div>
}

const menuContents = (menuContents: NavigationLinkItem[]) => {
    const linkClasses = "govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link"

    return menuContents.map(item => 
        <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
            <a href={item.href} className={linkClasses}>{item.label}</a>
        </li>
        )
}