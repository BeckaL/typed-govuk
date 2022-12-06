import * as React from 'react'

export const footer = (navLinks: NavigationLink[] = [topics, governmentActivity]) => {
    return <div className="govuk-width-container">
               <div className="govuk-footer__navigation" data-module="gem-track-click" data-track-links-only>
                   { console.log(navLinks) }
                   { navigationLinksDiv(navLinks) }
               </div>
           </div>
}

const navigationLinksDiv = (links: NavigationLink[]) => {
    return links.map(l => 
        <div className={ `${columnWidthClass(l.column)}  govuk-!-display-none-print` }>
            <h2 className="govuk-footer__heading govuk-heading-m">{l.title}</h2>
            <ul className={ listClasses(l.column) }>
                { l.items.map( (i: Item ) => 
                    <li className="govuk-footer__list-item">
                        <a href={ i.href }>{ i.text }</a>
                    </li>
                ) }
            </ul>
        </div>
)
}

const listClasses = (noOfColumns: number) => {
    return `govuk-footer__list govuk-footer__list--columns-${noOfColumns}}`
}


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

type Item = {
    text: String,
    href: String
}

type NavigationLink = {
    title: String,
    column: number,
    items: Item[]
}

const topics: NavigationLink = {
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
        }]
}

const governmentActivity: NavigationLink = {
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
}