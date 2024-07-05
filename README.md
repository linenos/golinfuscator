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

Exampe Input:
![image](https://github.com/linenos/golinfuscator/assets/159145344/f8a7a9ad-09fc-484f-bef5-9fba5b85405d)

Output ( Btw, the bytes are not the actual value ):
```golang
package main
import (
"fmt"
)

func booleanStatement() bool {
	return 28+10+29-30+7+15+29-24-20+17-26+24+12-26+8+10-22+25-20+10+15-30+26-34+30-25+32-19+19-34+19+11-21+11+13-33+8+15+32-27-25+13+26-9-21+28-19+20-7-32+9+27-31+29-31+25-9+31-15-22+8+31-17-31+11+11-20+19-24+11+29-27+34-22-20+12+13-31+23-25+21+13-34+34-34+29-28+11+23-13+22-7-8-18+8+29-7-17<(25*9-30/27-28-35-17-22/14/11-26/34-14-30/30)
}

func main() {
	testString := rhcgzcljgqtujka([]byte{35+26+14+24+35+29+28-24+29-27+27-19+30-30+9-21+20-16+16-20+28-16+22-30+7+26-16-32+9+13+27-30+8-15+20-15+34-29+29-16-35+7+33-21+13-35+35-32+14+34-9-24+22-32+19,14+14+16+10+26+12+27+28+32+13+11+15-14+26-30+30-20-19+27-21+21-25+8+17-28+12+8-32+13+14+34-22-34+24,26+10+12+10+25+21+7+15+18+31+10+31-8+16-21+29-25+24-13-19+32-33+28-28+9+14-33+23+14-28+21-7+10-31+28-18+17-7+23-16-24+20+7-21+18-33+20+16-21+7+29-27+31-17-16+30-35+20-11+17-29+32-18+33-21-26+35-30+22-32+18+15-34+31-31+34-27+24-33+35-10-12+20-18+9,35+31+19+34+9+26+10+9+16+21+11-33+27-26+9+12+18-34+25-7+25-20-31+7+14+9-30+7+16+22-24+17-31+27-18+23-32+18+12-27+14+18-8-7+22-14-12+29-32+26-21+14-27+9+32-31+17-33+17+35-26-19+17-28+13+8+28-27+20-24+29-28+24-12-12+33-35+29-27+15-22+32-17-15+17-29+34-22+27-10-28+14+7+20-16,8+22+27+15+10+23+27+13+20+17+25+33-35+15-25+30-11+31-28,34+27+10+28+21+24+16-21+8+17-22+32-16-33+9+24-31+13+20-20+24-18+15-7-34+32-23+25-32+19+21-30+33-35+12+17-18+32-28+12-27+7+17-21+13+32-35+19-31+21-30+17+31-27+33-28+27-15-26+18-28+14+13-25+30-10+10-33+18+16-29+16+15-19+23-33+22-10+22-31+10+31-17-14+27-22+25-15-28+17+25-31+7+22-33+13,18+14+23+34+22+9+17+24-30+8-27+11+12+35-17-18+20-23+18-8-14+12-27+27-29+32-22+21-17+32-21+20-27+35-7-10-34+17+12-14+20-32+28-12+10-15+13-19+24-16+8+18-26+18-20+18-7,7+7+14+34+7+22+11+12+33+27+22+11+18-23+23-12+13-30+13+18-17+7+12-15+16-11+31-31+17-32+14+35-7-34+20-7-12+13-31+9+35-18+29-20-32+27-8+27-12-31+7+27-9-11+8-23+16+18-27+25-33+20+28-8-16-35+20+15-18+26-35+13+19-20+24-29+15+20-30+35-17-16+32-33+32-8-29+29-34+10+21-17+25-11-7+20-32+23-19+17-16+34-27+23-7-23+9,11+22+21+12+15+12+12+24+10+33+12+10+15+13-33+8+27-33+18+32-30-17+28-14+22-7-12-15+25-25+17-19+34-16-15+8+11-7+17-34+28-29+21-27+10+30-13-18+7+35-29+20-11-15+17-24+21-13+26-25+30-32+33-26+13-9-20+35-9-17+31-27+23-12-33+14+32-9-9-13+10+24-29+12-29+30-30+33-35+21+24-27+27-7-7-34+23+24-18,25+13+8+13+21+29+23+10+23+14+22+21-12+19-32+25-26+20-11+35-11-16-7+26-9-35+32-23+14,7+13+12+34+30+28+33+19+31+16-16+31-34+19-10+14-25+23-7+19-21+27-17-21+31-7-26+16+27-33+9-19+29-21+18-30+22,12+28+10+13+24+20+10+13+11-23+11+21-22+32-33+10+9-25+8+35-12-32+31-8-21+14+24-16-8+34-25-25+17+35-25-31+18+22-29+20-15+31-12-24+15-21+9+16-20+29-14-8+17-18+11-31+9+35-16-20+10+30-35+34-18-21+24-31+11+20-29+29-10+8-30+8+33-14-17+9+31-23-11+12-12+24-14,21+8+19+34+7+22+11+23+22+19+22+14-12+14-35+20+11-8-15+30-12-14+24-25+22-9-8+26-21+22-25+24-13-9+9-26+35-9-10+34-35+17-15+31-19-14+14-24+22-30+9+34-32+14-16+31-28+20-18+10-34+18+34-33+17-15+9+25-25+26-9-19+11-18+22-17+7-18+35-7-33+19+35-24-17+34-9-22+22-18+34-10-34+10+20-32+15-11+33-31+7+8-23+31-14-15+27-10-17+21-26+21-16+22-8,21+19+15+26+29+14+30+32+14+35-11-31+27+31-7-17-27+32-28+29-14+22-11-15+34-7-13-27+20-18+25-12+25-30+17-30+14+12-26+7+12+32-14-13-35+28+29-27+15-28+22-30+10+24-18+15-24+34-10-7,25+19+25+18+20+14+26-18+12-22+17+30-13-10-25+25-35+16+16-12+27-8-8-14+33-9-18+20-23+34-32+19-15+31-20-16+11-31+8+17+7-18+33-18,27+15+28+35+17+34+19+9+28-17+14-27+34-28+26-27+15+21-26+28-28+26-29+33-29+14-19+19-9,11+30+14+21+19+32+35-34+35-16-10+30-18-23+25-7-8+25-27+24-17-9+8-20+16+18-12-15+22-10-29+10+33-22+11-23+8+25-21+25-30+10+8-17+19-29+8+29-23+22-23+20-20+11-20+21-19+15,20+31+29+22+22+31+10+14+25+31-18+16-7-26+29-30+12+27-8-8-15+33-25+30-10-35+29-21+13,24+35+16+29+16+10+14+13+19+14+18+35-33+14-25+23,15+9+16+13+26+23+16+26+9+28+23+15+8-33+19+29-9-22+35-27+9-14+26-25+24-27+23-10-8+12-25+30-34+28-30+26-19+34-18-19+17+28-13-19+20-12-24+10+29-9-26+24-9+11-33+18+17-7-13+15-14+9-35+35-26+31-30+19+22-27+35-29+27-22-28+28-17+18-34+15+34-9-26+11+11-30+18+16-25+16+27-34+28-32+27-20+17-9-26+12+15-35+22+31-24+13-7-23+10+22-32+28-32+13+31-19-16+21-10+15-21+8+32-34+28-7-15-13+23-14+31-24-8+35-18-33+17+27-30+33-21-9+28-33+19-18+29-32+22-18+33-8-21,15+19+32+24+21+13+35+30+14+31-19-27+14+26-11-18+29-24+7,28+18+14+26+27+23+19+11+20+30,26+10+7+19+12+25+16+23+19+24+12+28-14+7-11+19-20+26-12-31+35-35+26-10+24-23+35-9-19}, 34+16+19+29+31-24+31-15-34+16+35-26-24+7+23-32+31-17+22-15-35+31+9-33+21+27-23+34-26-31+19+17-9-27+16+17-35+13+35-28+12-12+27-27+27-35+31-34+24-30+16+32-25+17-7-14+20-32+30-26+20-28+27-21+17-8+23-17)
	fmt.Println(testString)
}

var dmfwuraodqnabavli = func(hkiyggeomhtmg interface{}, nmqrsxxkxu interface{}) string {
  return hkiyggeomhtmg.(string)
}

var ulqgrviqixwoguu = byte(172)
var xraqolfpfb = map[byte]interface{}{}
var lnzlpoqvokqeix = func ()  {
  _, ibuaheuadudasawqk := xraqolfpfb[byte(1)].(string)
  if (ibuaheuadudasawqk) {
      return;
  }

  liwvpctfcoiutulvyp := make([]byte, 17+34+23+21+8+16+14+9+21+28+17+10+33+22+33-8+7-35+24+11-21+34-16-32+16+32-31+25-28+20-13+25-15-11+30-30+19-16+32-28+35-20-13+18-34+17) // Create a byte slice with capacity for 100 elements
  for i := range liwvpctfcoiutulvyp {
      hkzddyqmqslga := byte(i)
      xraqolfpfb[hkzddyqmqslga] = string([]byte{hkzddyqmqslga})
  }
  xraqolfpfb[ulqgrviqixwoguu] = ""
}

func rhcgzcljgqtujka(liwvpctfcoiutulvyp []byte, pkkaagmmouebikb int) string {
  lnzlpoqvokqeix()
  xuqrimelrndrp := dmfwuraodqnabavli(xraqolfpfb[ulqgrviqixwoguu], true)
  for _, b := range liwvpctfcoiutulvyp {
      xuqrimelrndrp += dmfwuraodqnabavli(xraqolfpfb[b-byte(pkkaagmmouebikb)], xuqrimelrndrp);
  }
  return xuqrimelrndrp
}
```
