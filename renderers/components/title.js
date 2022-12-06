import * as React from 'react';
export var title = function (t) {
    var average_title_length = false;
    var context = false;
    var context_locale = false;
    var context_inside = false;
    var inverse = false;
    return React.createElement("div", { className: "gem-c-title govuk-!-margin-top-8 govuk-!-margin-bottom-8" },
        React.createElement("h1", { className: "govuk-caption-xl gem-c-title__text" }, t));
};
