import * as React from 'react';

export const feedback = () => {
    return <div className="govuk-width-container">
        <div className="gem-c-feedback govuk-!-display-none-print" data-module="feedback ga4-event-tracker" data-feedback-module-started="true" data-ga4-event-tracker-module-started="true">
            <div className="gem-c-feedback__prompt gem-c-feedback__js-show js-prompt" tabindex="-1">
                <div className="gem-c-feedback__prompt-content">
                    <div className="gem-c-feedback__prompt-questions js-prompt-questions">
                        <div className="gem-c-feedback__prompt-question-answer">
                            <h2 className="gem-c-feedback__prompt-question">Is this page useful?</h2>
                            <ul className="gem-c-feedback__option-list">
                                <li className="gem-c-feedback__option-list-item govuk-visually-hidden" style={{display: "none"}} hidden={false}>
                                    <a className="gem-c-feedback__prompt-link" data-track-category="yesNoFeedbackForm" data-track-action="ffMaybeClick" role="button" style={{display: "none"}} hidden="hidden" aria-hidden="true" href="/contact/govuk">
                                        Maybe
                                    </a>          </li>
                                <li className="gem-c-feedback__option-list-item">
                                    <button className="govuk-button gem-c-feedback__prompt-link js-page-is-useful" data-track-category="yesNoFeedbackForm" data-track-action="ffYesClick" data-ga4-event="{&quot;event_name&quot;:&quot;form_submit&quot;,&quot;type&quot;:&quot;feedback&quot;,&quot;text&quot;:&quot;Yes&quot;, &quot;section&quot;: &quot;Is this page useful?&quot;}">
                                        Yes <span className="govuk-visually-hidden">this page is useful</span>
                                    </button>
                                </li>
                                <li className="gem-c-feedback__option-list-item">
                                    <button className="govuk-button gem-c-feedback__prompt-link js-toggle-form js-page-is-not-useful" data-track-category="yesNoFeedbackForm" data-track-action="ffNoClick" aria-controls="page-is-not-useful" aria-expanded="false" data-ga4-event="{&quot;event_name&quot;:&quot;form_submit&quot;,&quot;type&quot;:&quot;feedback&quot;,&quot;text&quot;:&quot;No&quot;, &quot;section&quot;: &quot;Is this page useful?&quot;}">
                                        No <span className="govuk-visually-hidden">this page is not useful</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="gem-c-feedback__prompt-questions gem-c-feedback__prompt-success js-prompt-success" role="alert" hidden="">
                        Thank you for your feedback
                    </div>
                    <div className="gem-c-feedback__prompt-questions gem-c-feedback__prompt-questions--something-is-wrong js-prompt-questions">
                        <button className="govuk-button gem-c-feedback__prompt-link js-toggle-form js-something-is-wrong" data-track-category="Onsite Feedback" data-track-action="GOV-UK Open Form" aria-controls="something-is-wrong" aria-expanded="false" data-ga4-event="{&quot;event_name&quot;:&quot;form_submit&quot;,&quot;type&quot;:&quot;feedback&quot;,&quot;text&quot;:&quot;Report a problem with this page&quot;, &quot;section&quot;: &quot;Is this page useful?&quot;}">
                            Report a problem with this page
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}