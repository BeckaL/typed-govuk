import { compileFromFile } from 'json-schema-to-typescript';
import { writeFileSync } from 'fs';

const schemaNames = [
    'topical-event',
    'case-study'
]

// compile from file
schemaNames.forEach(name => {
    const fileName = `./schemas/${name}-schema.json`
    const writeTo = `./schemas/compiled/${name}.d.ts`
    compileFromFile(fileName).then(ts => writeFileSync(writeTo, ts))
})

