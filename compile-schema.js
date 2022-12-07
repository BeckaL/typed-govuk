import { compileFromFile } from 'json-schema-to-typescript';
import { writeFileSync } from 'fs';

const schemaNames = [
    "answer",
    "calendar",
    "case_study",
    "coming_soon",
    "completed_transaction",
    "consultation",
    "contact",
    "coronavirus_landing_page",
    "corporate_information_page",
    "detailed_guide",
    "document_collection",
    "email_alert_signup",
    "external_content",
    "facet",
    "fatality_notice",
    "finder_email_signup",
    "finder",
    "generic",
    "generic_with_external_related_links",
    "get_involved",
    "gone",
    "government",
    "guide",
    "help_page",
    "history",
    "hmrc_manual",
    "hmrc_manual_section",
    "homepage",
    "html_publication",
    "knowledge_alpha",
    "licence",
    "local_transaction",
    "mainstream_browse_page",
    "manual",
    "manual_section",
    "ministers_index",
    "need",
    "news_article",
    "organisation",
    "organisations_homepage",
    "person",
    "placeholder",
    "place",
    "publication",
    "redirect",
    "role_appointment",
    "role",
    "service_manual_guide",
    "service_manual_homepage",
    "service_manual_service_standard",
    "service_manual_service_toolkit",
    "service_manual_topic",
    "service_sign_in",
    "simple_smart_answer",
    "smart_answer",
    "specialist_document",
    "special_route",
    "speech",
    "statistical_data_set",
    "statistics_announcement",
    "step_by_step_nav",
    "take_part",
    "taxon",
    "topical_event_about_page",
    "topical_event",
    "topic",
    "transaction",
    "travel_advice_index",
    "travel_advice",
    "unpublishing",
    "working_group",
    "world_location_news",
    "world_location",
    "worldwide_organisation",
]

// compile from file
schemaNames.forEach(name => {
    const fileName = `./publishing-api/content_schemas/dist/formats/${name}/publisher_v2/schema.json`
    const writeTo = `./compiled-schemas/${name}.d.ts`
    compileFromFile(fileName).then(ts => writeFileSync(writeTo, ts))

    const linksFile = `./publishing-api/content_schemas/dist/formats/${name}/publisher_v2/links.json`
    const writeToLinks = `./compiled-schemas/links/${name}_links.d.ts`
    compileFromFile(linksFile).then(ts => writeFileSync(writeToLinks, ts))

})

