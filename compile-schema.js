import { compileFromFile } from 'json-schema-to-typescript';
import { writeFileSync } from 'fs';

// compile from file
compileFromFile('schema.json')
    .then(ts => writeFileSync('topical-event.d.ts', ts))

