import * as React from 'react'
import { getNavLinks } from '../utils.js'
import { renderHeaderNavLinks } from './header-nav-links.js'

export const header = () => {
  const logo_link = "https://www.gov.uk/"
  const logo_link_title = "GOV.UK"
  const logo_text = "GOV.UK"
  const navigation_menu_heading = "Navigation menu"
  const navigation_search_heading = "Search and popular pages"
  const navigation_search_subheading = "Search"
  const search_text = "Search GOV.UK"
  const navigationLinks = getNavLinks()


  return <><header role="banner" className="gem-c-layout-super-navigation-header" data-module="gem-track-click ga4-event-tracker" data-track-links-only data-ga4-expandable>
    <div className="gem-c-layout-super-navigation-header__container govuk-width-container govuk-clearfix">
      <div className="gem-c-layout-super-navigation-header__header-logo">
        <a
          className="govuk-header__link govuk-header__link--homepage"
          data-track-action="logoLink"
          data-track-category="headerClicked"
          data-track-label={logo_link}
          data-track-dimension="<%= logo_text %>"
          data-track-dimension-index="29"
          href={logo_link}
          id="logo"
          title={logo_link_title}
        >
          <span className="govuk-header__logotype">
            <svg
              aria-hidden="true"
              className="govuk-header__logotype-crown gem-c-layout-super-navigation-header__logotype-crown"
              focusable="false"
              height="30"
              viewBox="0 0 132 97"
              width="36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 30.2c3.5 1.5 7.7-.2 9.1-3.7 1.5-3.6-.2-7.8-3.9-9.2-3.6-1.4-7.6.3-9.1 3.9-1.4 3.5.3 7.5 3.9 9zM9 39.5c3.6 1.5 7.8-.2 9.2-3.7 1.5-3.6-.2-7.8-3.9-9.1-3.6-1.5-7.6.2-9.1 3.8-1.4 3.5.3 7.5 3.8 9zM4.4 57.2c3.5 1.5 7.7-.2 9.1-3.8 1.5-3.6-.2-7.7-3.9-9.1-3.5-1.5-7.6.3-9.1 3.8-1.4 3.5.3 7.6 3.9 9.1zm38.3-21.4c3.5 1.5 7.7-.2 9.1-3.8 1.5-3.6-.2-7.7-3.9-9.1-3.6-1.5-7.6.3-9.1 3.8-1.3 3.6.4 7.7 3.9 9.1zm64.4-5.6c-3.6 1.5-7.8-.2-9.1-3.7-1.5-3.6.2-7.8 3.8-9.2 3.6-1.4 7.7.3 9.2 3.9 1.3 3.5-.4 7.5-3.9 9zm15.9 9.3c-3.6 1.5-7.7-.2-9.1-3.7-1.5-3.6.2-7.8 3.7-9.1 3.6-1.5 7.7.2 9.2 3.8 1.5 3.5-.3 7.5-3.8 9zm4.7 17.7c-3.6 1.5-7.8-.2-9.2-3.8-1.5-3.6.2-7.7 3.9-9.1 3.6-1.5 7.7.3 9.2 3.8 1.3 3.5-.4 7.6-3.9 9.1zM89.3 35.8c-3.6 1.5-7.8-.2-9.2-3.8-1.4-3.6.2-7.7 3.9-9.1 3.6-1.5 7.7.3 9.2 3.8 1.4 3.6-.3 7.7-3.9 9.1zM69.7 17.7l8.9 4.7V9.3l-8.9 2.8c-.2-.3-.5-.6-.9-.9L72.4 0H59.6l3.5 11.2c-.3.3-.6.5-.9.9l-8.8-2.8v13.1l8.8-4.7c.3.3.6.7.9.9l-5 15.4v.1c-.2.8-.4 1.6-.4 2.4 0 4.1 3.1 7.5 7 8.1h.2c.3 0 .7.1 1 .1.4 0 .7 0 1-.1h.2c4-.6 7.1-4.1 7.1-8.1 0-.8-.1-1.7-.4-2.4V34l-5.1-15.4c.4-.2.7-.6 1-.9zM66 92.8c16.9 0 32.8 1.1 47.1 3.2 4-16.9 8.9-26.7 14-33.5l-9.6-3.4c1 4.9 1.1 7.2 0 10.2-1.5-1.4-3-4.3-4.2-8.7L108.6 76c2.8-2 5-3.2 7.5-3.3-4.4 9.4-10 11.9-13.6 11.2-4.3-.8-6.3-4.6-5.6-7.9 1-4.7 5.7-5.9 8-.5 4.3-8.7-3-11.4-7.6-8.8 7.1-7.2 7.9-13.5 2.1-21.1-8 6.1-8.1 12.3-4.5 20.8-4.7-5.4-12.1-2.5-9.5 6.2 3.4-5.2 7.9-2 7.2 3.1-.6 4.3-6.4 7.8-13.5 7.2-10.3-.9-10.9-8-11.2-13.8 2.5-.5 7.1 1.8 11 7.3L80.2 60c-4.1 4.4-8 5.3-12.3 5.4 1.4-4.4 8-11.6 8-11.6H55.5s6.4 7.2 7.9 11.6c-4.2-.1-8-1-12.3-5.4l1.4 16.4c3.9-5.5 8.5-7.7 10.9-7.3-.3 5.8-.9 12.8-11.1 13.8-7.2.6-12.9-2.9-13.5-7.2-.7-5 3.8-8.3 7.1-3.1 2.7-8.7-4.6-11.6-9.4-6.2 3.7-8.5 3.6-14.7-4.6-20.8-5.8 7.6-5 13.9 2.2 21.1-4.7-2.6-11.9.1-7.7 8.8 2.3-5.5 7.1-4.2 8.1.5.7 3.3-1.3 7.1-5.7 7.9-3.5.7-9-1.8-13.5-11.2 2.5.1 4.7 1.3 7.5 3.3l-4.7-15.4c-1.2 4.4-2.7 7.2-4.3 8.7-1.1-3-.9-5.3 0-10.2l-9.5 3.4c5 6.9 9.9 16.7 14 33.5 14.8-2.1 30.8-3.2 47.7-3.2z"
                fill="currentColor"
                fillRule="evenodd"
              >
              </path>
            </svg>
            <span className="govuk-header__logotype-text">{logo_text}</span>
          </span>
        </a>
      </div>
      <nav
        aria-labelledby="super-navigation-menu-heading"
        className="gem-c-layout-super-navigation-header__content"
        data-module="super-navigation-mega-menu"
      >
        <h2 id="super-navigation-menu-heading" className="govuk-visually-hidden">{navigation_menu_heading}</h2>
        <button
          aria-controls="super-navigation-menu"
          aria-expanded="true"
          aria-label="<%= hide_navigation_menu_text %>"
          className="gem-c-layout-super-navigation-header__navigation-top-toggle-button"
          data-text-for-hide="<%= hide_navigation_menu_text %>"
          data-text-for-show="<%= show_navigation_menu_text %>"
          data-toggle-desktop-group="hidden"
          data-toggle-mobile-group="top"
          data-tracking-key="menu"
          hidden
          id="super-navigation-menu-toggle"
          type="button"
        >
          <span className="gem-c-layout-super-navigation-header__navigation-top-toggle-button-inner">Menu</span>
        </button>
        
        <ul id="super-navigation-menu" className="gem-c-layout-super-navigation-header__navigation-items">{renderHeaderNavLinks(navigationLinks)}</ul>

        <button
          aria-controls="super-search-menu"
          aria-expanded="true"
          aria-label="<%= hide_search_menu_text %>"
          className="gem-c-layout-super-navigation-header__search-toggle-button"
          data-text-for-hide="<%= hide_search_menu_text %>"
          data-text-for-show="<%= show_search_menu_text %>"
          data-toggle-mobile-group="top"
          data-toggle-desktop-group="top"
          data-tracking-key="search"
          hidden
          id="super-search-menu-toggle"
          type="button"
        >
          <span className="govuk-visually-hidden">{search_text}</span>
          {searchIcon("gem-c-layout-super-navigation-header__search-toggle-button-link-icon")}
          <span
            aria-hidden="true"
            className="gem-c-layout-super-navigation-header__navigation-top-toggle-close-icon"
            focusable="false"
          >
            {/* &times; */}
          </span>
        </button>

        

        <div id="super-search-menu" className="gem-c-layout-super-navigation-header__search-items">
          <h3 className="govuk-visually-hidden">{navigation_search_subheading}</h3>
          <div className="gem-c-layout-super-navigation-header__search-item">
            <a className="gem-c-layout-super-navigation-header__search-item-link" href="/search">
              <span className="gem-c-layout-super-navigation-header__search-item-link-text">{search_text}</span>
              <svg
                className="gem-c-layout-super-navigation-header__search-item-link-icon"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <circle
                  cx="10.0161"
                  cy="10.0161"
                  r="8.51613"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <line
                  x1="15.8668"
                  y1="16.3587"
                  x2="25.4475"
                  y2="25.9393"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
            </a>
          </div>

          <div className="govuk-width-container gem-c-layout-super-navigation-header__search-and-popular">
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full">
                <form
                  className="gem-c-layout-super-navigation-header__search-form"
                  id="search"
                  action="/search"
                  method="get"
                  role="search"
                  aria-label="Site-wide"
                >
                  {/* <%= render "govuk_publishing_components/components/search", {
                            inline_label: false,
                            label_size: "m",
                            label_text: search_text,
                            size: "large",
                            data_attributes: {
                              track_category: "headerClicked",
                              track_action: "searchSubmitted",
                              track_label: "/search/all",
                              track_dimension: t("components.search_box.label"),
                              track_dimension_index: 29,
                            },
                          } %> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
    <div className="gem-c-layout-for-public__blue-bar govuk-width-container"></div>
  </>
}


const searchIcon = (className: string) => {
  return <svg
    className={className}
    width="27"
    height="27"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <circle
      cx="12.0161"
      cy="11.0161"
      r="8.51613"
      stroke="currentColor"
      stroke-width="3" />
    <line
      x1="17.8668"
      y1="17.3587"
      x2="26.4475"
      y2="25.9393"
      stroke="currentColor"
      stroke-width="3" />
  </svg>
}