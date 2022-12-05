import { compileFromFile } from 'json-schema-to-typescript';
import { writeFileSync } from 'fs';

// compile from file
compileFromFile('./schemas/topical-event-schema.json')
    .then(ts => writeFileSync('./schemas/compiled/topical-event.d.ts', ts))

