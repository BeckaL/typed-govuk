import * as React from 'react'
import {Schema} from './topical-event'
import {renderToStaticMarkup} from "react-dom/server";

const main = async () => {
    const schema: Schema = await fetch("https://www.gov.uk/api/content/government/topical-events/budget-2021")
        .then(resp => resp.json());

    return (
        <p>{schema.public_updated_at}</p>
    )
};

main().then(page => console.log(renderToStaticMarkup(page)))

// <p>Hello world</p>;
