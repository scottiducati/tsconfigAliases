# tsconfigAliases

Function to copy your tsconfig.json aliases into the resolve section into webpack. 

## Usage

```javascript

module.exports = {
    ...
    resolve : {
        aliases: tsConfigAliases('./tsconfig.json') 
    }
}

```
