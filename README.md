## Context

A gift week project looking at rendering govuk using a different technology - in this case, typescript.

By compiling publishing api's `content-schemas` using the `json-schema-to-typescript` library, we have typescript types for each schema available. We can then cast the json content item received from content store to this type, and work with this typed object when rendering the page. We might be able to improve this further by using a library like [io-ts](https://github.com/gcanti/io-ts) to decode the json (we'd probably want to just write a light wrapper around this, going full fp is probably a step too far :-D)

This gives us type-safety upon rendering, and gives us access to the improved developer ergonomics of a typed language (code completion, quicker feedback, easier to understand the shape of the data we're handling, improved code navigation).

## Running the project locally

Compile the schemas (needs to be done just once, unless a schema changes):

`$ npm compile-schemas`

Compile the typescript and run:

`$ npm run compile && npm start`

Navigate to the homepage at localhost:3000 - a few examples are given on the homepage, the most filled-out one is the speech.
