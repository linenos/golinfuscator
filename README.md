# golinfuscator
Since Windows AntiVirus triggered when obfuscating my go projects with garble, I decided to make this.

## Features
- Encrypt Strings
- Encrypt Boolean statements
- Minify Output [broken]

## Upcoming Features
> Rename variables
> 
> Insert junk in functions
> 
> Hide package imports

## Installation
golinfuscator requires [Node.js](https://nodejs.org/en/download/prebuilt-installer) v16+ to run.
Copy the "build.js" file into your directory and run:
```lua
node build.js
```


Custom Options [ modify the build.js top line code ]
```js
const config  = {
    // Encrypt all strings
    EncryptStrings: true,

    // Change boolean statements into number statements (using > and < sign)
    EncryptBoolean: true,

    // Minify script afterwards, compacting it
    Minify: true,

    // Only target .go files, all other type of files wont be written in the output
    OnlyOutputGo: true,

    // Output Directory
    Output: "./Output",

    // Auto Build after obfuscation
    Build: true,
    BuildScript: "go build -o obfuscated.exe ./" // this script builds the obfuscated content into the Output directory
}
```
