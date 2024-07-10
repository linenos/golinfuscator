// YES THIS TARGETS ALL FILES FOUND [ this searches through directories ]
const config  = {
    // Encryption
    EncryptStrings: true, // Encrypt all strings
    EncryptBoolean: true, // Change boolean statements into number statements (using > and < sign)
    EncryptVariables: false, // Change names of variables [ BROKEN ]

    // Only target .go files, all other type of files wont be written in the output
    OnlyOutputGo: true,

    // Skip Existing Files in the Output Directory
    SkipExisting: false,

    // Output Directory
    Output: "./Output",
    Build: true, // Auto build after obfuscating
    BuildScript: "go build -o obfuscated.exe ./" // this script builds the obfuscated content into the Output directory
}


// Below is the code, i don't recommend modifying it
const child_process = require("node:child_process");
const path = require("node:path");
const fs = require("node:fs");
const trueStatements = [
    "return true", "=true", " = true", "= true",
    "return false", "=false", " = false", "= false"
];

function generateNumEq(original, minimum = 14) {
    let currenteq = 0;
    let base = original || getRandomInt(5, 100);
    let eqbase = `${getRandomInt(7, 35)}`;
    while (true) {
        let val = eval(eqbase);
        if (val == base && currenteq >= minimum) {
            break;
        }
  
        let rand = getRandomInt(1, 2);
        currenteq ++;
        if (val > base) {
            // Value is greater than the base, common sense
            eqbase += `${rand == "1" && "-" || "-"}${getRandomInt(7, 35)}`;
        } else {
            eqbase += `${rand == "1" && "+" || "+"}${getRandomInt(7, 35)}`;
        }
    }
    return eqbase;
}
function generateString(length) {
    if (typeof length !== 'number' || length <= 0) {
      throw new Error('Invalid length parameter: must be a positive number');
    }
  
    let result = "";
    for (let i = 0; i < length; i++) {
      // Generate a random character (a-z)
      const charCode = Math.floor(Math.random() * 26) + 97;
      const char = String.fromCharCode(charCode);
      result += char;
    }
    return result
}
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max + 1);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
function loopDirectory(directory, childrens, callback) {
    if (!fs.existsSync(directory)) {
        return "Directory not found";
    }

    let stats = fs.lstatSync(directory);
    if (!stats.isDirectory()) {
        return "Path specified is not a directory";
    }

    let files = fs.readdirSync(directory);
    for (var filename of files) {
        let filepath = path.join(directory, filename);
        try {
            stats = fs.lstatSync(filepath);
        } catch(err) {
            continue;
        }
        
        // Check for callback
        if (typeof(callback) == "function") {
            callback(filename, filepath, stats.isDirectory());
        }

        // Check if descendants params are asked
        if (childrens && stats.isDirectory()) {
            loopDirectory(filepath, childrens, callback);
        }
    }
}

// Filter the import statements for golang
function filterImports(sourceCode) {
  const lines = sourceCode.split('\n');
  const filteredLines = [];
  const importStatements = [];
  const importPaths = [];
  const importCache = [];

  let inImportBlock = false; // Flag to track import block
  let currentImportBlock = []; // Array to store lines within a block

  for (var i in lines) {
    const line = lines[i];
    const trimmedLine = line.trim();

    if (trimmedLine.startsWith('import')) {
      inImportBlock = true; // Start of import block
      currentImportBlock.push(line); // Add import line
    } else if (inImportBlock) {
      if (trimmedLine.endsWith(')')) {
        inImportBlock = false; // End of import block
        importStatements.push(...currentImportBlock); // Add all lines in the block
        currentImportBlock.length = 0; // Reset block lines

        // Extract import paths (improved approach)
        let indfound = false;
        for (const importLine of importStatements) {
          const pathMatch = importLine.match(/\"(.*?)\"|\'(.*?)\'/); // Regex for both single and double quotes
          if (pathMatch) {
            importPaths.push(pathMatch[1]); // Add extracted path
            indfound = true;
          }
        }

        // All the paths imported with this
        if (indfound && !filteredLines.includes(`$import${i}`)) {
            importCache.push([`$import${i}`, importPaths]);
            filteredLines.push(`$import${i}`);
        }

        
        importStatements.length = 0; // Reset import statements array for next block
      } else {
        currentImportBlock.push(line); // Add non-closing line to block
      }
    } else {
      filteredLines.push(line); // Add non-import lines
    }
  }

  return { filteredCode: filteredLines.join('\n'), importStatements: importCache, importPaths };
}


// Building
let stringDoubleQuoteMatchRegex = /"(.*?)"/g;
let stringQuoteMatchRegex = /'(.*?)'/g;

// Create output path
if (!config.Output.includes("C:")) {
    config.Output = path.join(__dirname, config.Output)
}
if (!fs.existsSync(config.Output)) {
    fs.mkdirSync(config.Output);
}

// Obfuscation
const Obfuscate = function(contents) {
    let cached = {
        // Name randomizer
        bytesDump: "bytesDump",
        allocateBytesDump: "allocateBytesDump",
        byteArray: "byteArray",
        resultVariable: "result",
        bytedVariable: "byted",
        isokVariable: "isok",
        Decrypt: "Decrypt",
        returnString: "returnString",
        byteOffset: getRandomInt(25, 100),
    
        // function arguments
        byted300: "byted300",
        tostringVariable: "result",
        subint: "subint",
    };

    let parsedFile = filterImports(contents);
    let mainFile = parsedFile.filteredCode;

    // Shifting Names
    for (i in cached) {
        if (typeof(cached[i]) != "string") {
            continue;
        }
        cached[i] = generateString(getRandomInt(10, 18));
    }

    // Removing Comments
    mainFile = mainFile.replace(/\/\*[\s\S]*?\*\/|(?<=[^:])\/\/.*|^\/\/.*/g, "");

    // Parsing Variables
    const regex = /(?:var\s+|\s+)([^\s,]+)\s*(?:[:=]|:=)/gm;
    const matches = mainFile.match(regex);
    if (matches && config.EncryptVariables) {
        matches.forEach((match) => {
            const variableName = match.split(/\s+/)[1];
            const useCases = [
                `.`, // Indexing
                `[`, `(`, "{", "=", ",", "]", ")", "}", ";", // Default expressions
                `+`, "-", ",", ">", "<", "*", "^", "%", "/", ":=" // Math expressions
            ];

            let newName = "v_" + generateString(13);
            mainFile = mainFile.replace(`var ${variableName}`, `var ${newName}`);
            for (i in useCases) {
                let useCase = useCases[i];
                mainFile = mainFile.split(variableName + useCase).join(newName + useCase); // replace variable
                mainFile = mainFile.split(variableName + " " + useCase).join(newName + useCase); // replace variable
            }
        });
    }

    // Parsing statements
    let split = mainFile.split(/\r?\n/);
    let allStrings = [];
    for (i in split) {
        let line = split[i];
    
        // Parsing all strings
        let match;
        while ((match = stringDoubleQuoteMatchRegex.exec(line)) !== null) {
            // Capture the matched string (excluding quotes)
            allStrings.push(['"'+match[1]+'"', i]);
        }
        match = null;
        while ((match = stringQuoteMatchRegex.exec(line)) !== null) {
            // Capture the matched string (excluding quotes)
            allStrings.push(["'"+match[1]+"'", i]);
        }
    
        // Securing all boolean statements
        for (i in trueStatements) {
          let tosearch = trueStatements[i];
          // Skip
          if (!mainFile.includes(tosearch)) {
              //onsole.log("Booleans: Skipping '", tosearch, "'")
              continue;
          }
    
          let toequal = tosearch.includes("true") && true || false;
          let minimum = 14;
          let base = getRandomInt(1, 100);
          let eqbase = generateNumEq(base);
        
          currenteq = 0;
          let statement = `${eqbase}${getRandomInt(1, 2) == "1" && ">" || "<"}(${getRandomInt(8, 45)}`;
          while (true) {
              let val = eval(statement+")");
              if (currenteq > 200) {
                  // Prevent memory overflow LUL
                  statement = `${eqbase}${getRandomInt(1, 2) == "1" && ">" || "<"}(${getRandomInt(8, 45)}`;
                  currenteq = 0;
              }
        
              if (currenteq >= minimum && val == toequal) {
                  statement += ")"; // syntax igjhbjI(UGEJOIGJH)
                  break;
              }
        
              let toselect = getRandomInt(1, 4);
              let toeval = eval((statement.includes(">") && statement.split(">")[1] || statement.includes("<") && statement.split("<")[1] || statement) + ")");
              if (toeval > base && toequal == false) {
                  // we dont want the base to be greater than the equation
                  toselect = getRandomInt(1, 2);
              } else if (toeval > base && toequal == true) {
                  toselect = getRandomInt(3, 4);
              }
              
              statement += `${toselect == "1" && "+" || toselect == "2" && "*" || toselect == "3" && "/" || toselect == "4" && "-" || "-"}${getRandomInt(7, 35)}`;
              currenteq ++;
          };

          let formatting = `${tosearch.replace(toequal+"", "")}${statement}`
          mainFile = mainFile.replace(tosearch, formatting);
      }
    }

    // 'Encrypting' strings
    for (i in allStrings) {
        let raw = allStrings[i];
        let quote = raw[0][0];
        str = raw[0].split(quote).join("");
        let func = `,${str},`
        let rebuilt = ",";
    
        // Empty string detection
        if (str == "") {
            continue;
        }
    
        let addInt = getRandomInt(30, 120);
        let addIntJunk = generateNumEq(addInt, 10);
        for (var i = 0; i < str.length; i++) {
            let strtext = str[i];
            let byted = parseInt(strtext.charCodeAt(0)) + addInt/*cached["byteOffset"]*/;
            let byteJunk = generateNumEq(byted, 5);
            rebuilt += "," + byted;
        }; rebuilt = rebuilt.split(",,").join("");
    
        func = func.replace(`,${str},`, `${cached["Decrypt"]}([]int{${rebuilt}}, ${addIntJunk})`);
        mainFile = mainFile.replace(raw[0], func);
    }

    // Re-adding Import statements
    for (i in parsedFile.importStatements) {
        let statement = parsedFile.importStatements[i];
        mainFile = mainFile.replace(statement[0], `import (\n"${statement[1].join(`"\n"`)}"\n)\n`);
    }

    // Finishing Build
    let goEndScript = `
    var ${cached["returnString"]} = func(${cached["tostringVariable"]} interface{}, ${generateString(10)} interface{}) string {
      return ${cached["tostringVariable"]}.(string)
    }
    
    var ${cached["byted300"]} = byte(${getRandomInt(170, 255)})
    var ${cached["bytesDump"]} = map[byte]interface{}{}
    var ${cached["allocateBytesDump"]} = func ()  {
      _, ${cached["isokVariable"]} := ${cached["bytesDump"]}[byte(1)].(string)
      if (${cached["isokVariable"]}) {
          return;
      }
    
      ${cached["byteArray"]} := make([]byte, ${generateNumEq(300, 30)})
      for i := range ${cached["byteArray"]} {
          ${cached["bytedVariable"]} := byte(i)
          ${cached["bytesDump"]}[${cached["bytedVariable"]}] = string([]byte{${cached["bytedVariable"]}})
      }
      ${cached["bytesDump"]}[${cached["byted300"]}] = ""
    }
    
    func ${cached["Decrypt"]}(${cached["byteArray"]} []int, ${cached["subint"]} int) string {
      ${cached["allocateBytesDump"]}()
      ${cached["resultVariable"]} := ${cached["returnString"]}(${cached["bytesDump"]}[${cached["byted300"]}], ${getRandomInt(1, 2) == "1" && "true" || getRandomInt(3, 350)})
      for _, b := range ${cached["byteArray"]} {
          ${cached["resultVariable"]} += ${cached["returnString"]}(${cached["bytesDump"]}[byte(b)-byte(${cached["subint"]})], ${cached["resultVariable"]});
      }
      return strings.Replace(strings.Replace(strings.Replace(${cached["resultVariable"]}, "${"\\\\n"}", "\\n", -1), "${"\\\\t"}", "\\t", -1), "${"\\\\r"}", "\\r", -1)
    }`;
    return mainFile += `\n${goEndScript}`;
}
loopDirectory(path.join(__dirname, "./"), true, (filename, filepath, isdir) => {
    if (isdir) {
        //console.log(`[ + ] Encrypting code in directory "${filename}" to `)
        // Skip output directory
        if (filepath.includes(path.join(__dirname, "Output"))) {
            return;
        }

        let outputP = path.join(config.Output, filepath.replace(__dirname, ""));
        if (!fs.existsSync(outputP)) {
            fs.mkdirSync(outputP);
        }
        return;
    }
    
    // Skip output directory
    if (filepath.includes(path.join(__dirname, "Output"))) {
        return;
    }

    // Parse only .go files
    let outputP = path.join(config.Output, filepath.replace(__dirname, ""));
    if (filename.split(".")[filename.split(".").length - 1] == "go") {
        if (fs.existsSync(outputP) && config.SkipExisting) {
            return; // Already 'Obfuscated'
        }

        console.log("[ + ] " + outputP)
        let result = Obfuscate(fs.readFileSync(filepath, "utf-8"));
        fs.writeFileSync(outputP, result)
    } else {
        // write default file
        if (!config.OnlyOutputGo) {
            fs.writeFileSync(outputP, result);
        }
    }
})

// Building
if (config.Build) {
    console.log("--------------------------------- Building ---------------------------------");
    child_process.exec(config.BuildScript, {
        cwd: config.Output,
        detached: true,
        stdio: "inherit"
    });
} else {
    console.log("--------------------------------- Done! ---------------------------------");
}
