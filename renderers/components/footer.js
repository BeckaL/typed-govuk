import * as React from 'react';
export var footer = function (navLinks) {
    if (navLinks === void 0) { navLinks = [topics, governmentActivity]; }
    return React.createElement("div", { className: "govuk-width-container" },
        React.createElement("div", { className: "govuk-footer__navigation", "data-module": "gem-track-click", "data-track-links-only": true },
            console.log(navLinks),
            navigationLinksDiv(navLinks)));
};
var navigationLinksDiv = function (links) {
    return links.map(function (l) {
        return React.createElement("div", { className: "".concat(columnWidthClass(l.column), "  govuk-!-display-none-print") },
            React.createElement("h2", { className: "govuk-footer__heading govuk-heading-m" }, l.title),
            React.createElement("ul", { className: listClasses(l.column) }, l.items.map(function (i) {
                return React.createElement("li", { className: "govuk-footer__list-item" },
                    React.createElement("a", { href: i.href }, i.text));
            })));
    });
};
var listClasses = function (noOfColumns) {
    return "govuk-footer__list govuk-footer__list--columns-".concat(noOfColumns, "}");
};
var columnWidthClass = function (noOfColumns) {
    switch (noOfColumns) {
        case 2:
            return "govuk-grid-column-two-thirds";
        case 3:
            return "govuk-grid-column-full";
        default:
            return "govuk-grid-column-one-third";
    }
};
var topics = {
    title: "Topics",
    column: 2,
    items: [
        {
            text: "Benefits",
            href: "/browse/benefits"
        },
        {
            text: "Births, death, marriages and care",
            href: "/browse/births-deaths-marriages"
        },
        {
            text: "Business and self-employed",
            href: "/browse/business"
        },
        {
            text: "Childcare and parenting",
            href: "/browse/childcare-parenting"
        },
        {
            text: "Citizenship and living in the UK",
            href: "/browse/citizenship"
        },
        {
            text: "Cost of living support",
            href: "/cost-of-living"
        },
        {
            text: "Crime, justice and the law",
            href: "/browse/justice"
        },
        {
            text: "Disabled people",
            href: "/browse/disabilities"
        },
        {
            text: "Driving and transport",
            href: "/browse/driving"
        },
        {
            text: "Education and learning",
            href: "/browse/education"
        },
        {
            text: "Employing people",
            href: "/browse/employing-people"
        },
        {
            text: "Environment and countryside",
            href: "/browse/environment-countryside"
        },
        {
            text: "Housing and local services",
            href: "/browse/housing-local-services"
        },
        {
            text: "Money and tax",
            href: "/browse/tax"
        },
        {
            text: "Passports, travel and living abroad",
            href: "/browse/abroad"
        },
        {
            text: "Visas and immigration",
            href: "/browse/visas-immigration"
        },
        {
            text: "Working, jobs and pensions",
            href: "/browse/working"
        }
    ]
};
var governmentActivity = {
    title: "Government activity",
    column: 1,
    items: [
        {
            text: "Departments",
            href: "/government/organisations"
        },
        {
            text: "News",
            href: "/search/news-and-communications"
        },
        {
            text: "Guidance and regulation",
            href: "/search/guidance-and-regulation"
        },
        {
            text: "Research and statistics",
            href: "/search/research-and-statistics"
        },
        {
            text: "Policy papers and consultations",
            href: "/search/policy-papers-and-consultations"
        },
        {
            text: "Transparency",
            href: "/search/transparency-and-freedom-of-information-releases"
        },
        {
            text: "How government works",
            href: "/government/how-government-works"
        },
        {
            text: "Get involved",
            href: "/government/get-involved"
        }
    ]
};
