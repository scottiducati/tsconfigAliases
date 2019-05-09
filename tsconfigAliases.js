const fs = require('fs');
const path = require('path');

// strip-json-comments is often needed as tsconfig.json file contains comments
// that need to be removed, else the JSON.parse() breaks
const stripJSON = require('strip-json-comments');



export const tsconfigAliases = (tsconfigPath) => {
    let aliases = {};

    const getJSON = (p) => {
        return stripJSON(fs.readFileSync(require.resolve(p), {encoding: 'utf-8'}));
    }

    const tsPaths = JSON.parse(getJSON(tsconfigPath)).compilerOptions.paths;

    for (let key in tsPaths){
        aliases[key.replace('/*','')] = path.resolve(__dirname, tsPaths[key][0].replace('/*', ''))
    };

    return aliases;
}
