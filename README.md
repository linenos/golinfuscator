# golinfuscator
Since Windows AntiVirus triggered when obfuscating my go projects with garble, I decided to make this.

## Features
- Encrypt Strings
- Encrypt Boolean statements
- Rename Variables

## Upcoming Features
> Insert junk in functions
> 
> Hide package imports
> Fix import

## Installation
golinfuscator requires [Node.js](https://nodejs.org/en/download/prebuilt-installer) v16+ to run.
Copy the "build.js" file into your directory and run:
```lua
node build.js
```


Custom Options [ modify the build.js top line code ]
```js
const config  = {
    // Encryption
    EncryptStrings: true, // Encrypt all strings
    EncryptBoolean: true, // Change boolean statements into number statements (using > and < sign)
    EncryptVariables: true, // Change names of variables

    // Only target .go files, all other type of files wont be written in the output
    OnlyOutputGo: true,

    // Skip Existing Files in the Output Directory
    SkipExisting: false,

    // Output Directory
    Output: "./Output",
    Build: true, // Auto build after obfuscating
    BuildScript: "go build -o obfuscated.exe ./" // this script builds the obfuscated content into the Output directory
}
```

## Example Input:
```golang
package main
import (
	"fmt"
)
func booleanStatement() bool {
	return true
}

func main() {
	testString := "Hello, this is a string"
	fmt.Println(testString)
}
```


## Output ( Btw, the bytes are not the actual value ):
```golang
package main
import (
"fmt"
)

func booleanStatement() bool {
	return 20-32+10+34-27+18-30+22-9+18-12+25-28+28-20-14+13-19+9+14-23+14+24-19-14+22-34+20+19-35+14+31-26-15+12+13-8-9+25-18-23+13+34-11-25+31-19-20+25-7+13-19+7>(28-20*16+30/31/12-23+24/16*16*24-23/31-21-18/20/26-35-29/13-21-30/33-30-8/19-14-19/35/35/10-31/33/9/17-9/34/8-22-25/17-16-7-16-12-31/31-17/25/18/35-21/16-29/14-22/27/8/30/19-15/16/21-21/27-21/33-19-27)
}

func main() {
	v_pzgpwoidtipmo:= yihkvgvoiwhnipdg([]byte{27+24+31+21+26-22+32-34+20-34+22+10-14+20-27+32-12-34+17+27-16+16-13+27-34+27-17-20+8+25-15+28-8-14-12+17-8-29+23+35-21-33+35-35+11+17-11+10-23+29-28+14+10-30+25-16+32-28+29-11-23+26-23+35-14-23+19-8+8-28+20+9-21+12+30-26,33+34+22+28+20+18-27+27-21+8+22-12-14+20-30+24-34+11+23-30+25+9-15+13-29+33-12+12-28+17+14-34+13+33-10-14+26-34+15-21+33-26+31-24+19-30+21-28+28-19+14-14+11-11+15-19+17-27+19+10-17+8+35-25-16+17-25+35-10-29+22,16+34+30+8+13+29+14+21-11+31-17-21+21-26+20-18+7+23-17,17+18+12+27+25+26+35-7+35-17-12-20+24-32+8+10+33-8-27+11-24+29-15+29-21+34-28-7+12-29+22-31+29-32+20+32-29+12-21+19-9+29-31+32-14-33+34-12+31-32+22-28+24-26+33-11-20+32-30+23-21+14-18+12-10+19-14+25-18-34+11+12+12-14+25-27+15-33+32-25+30-20+14-28+29-32+28,11+18+12+13+14+24+11+30+16+24-35+35-26+9+13-11+29-23-13+24-9-19+15-25+33-10,19+15+10+34+25-20+25-8-14+20-14+22-29+25-25+7+27-11-29+11+35-31-27+25+28-34+7,11+35+35+35-7-21-25+24-11+19-14,21+30+15+35+20+24+21-12+29-7-11,12+31+35+14+29+32,20+11+13+21+30+33+17+9,9+33+27+26+35+34,13+29+22+35-14-25+10+29-20+9-25+14+26-16-10+24-14-10+34-9-11-34+32-8,16+31+9+35+23+21+30-12+18-30+32-8-32+34-33+32-20+18-13+25-20-28+33-24+27-31+21,31+8+14+20+27+21+18+18+8-18+24-26+35-18+19-28+34-21-34+26+35-15-17+25-10-17+27-13-18+8+15-30+27-21+28-20+22-17-14+27-31+31-9-25+33-31+34-16-34+19+22-31+23-10+34-9-8-34+34-26+10+12-23+27-26+33-10-32+11+23-10+33-15-12-35+10+13+30-10-31+30-11+12-19+12-24+20,33+16+15+18-23+14+28-27+18-33+12+19-8-15+15-21+33-32+21-14+8+9-12+11-35+29+7-23+17+20-10-21+33-18-11+18-24+29-22+14-35+18+15-17+25-11-29+20+19-10-23+12+33-27+10-20+22-31+18+10-22+14+10-15+21-18+10-9+21-29+21-24+12+9-7,25+17+18+12+17+29+26+9-23+33-28+22-23+35-7-24+28-35+20-26+26-18+20-14+15-25+14+25-10-28+33-30+11+28-25-7+10-13+24-31+7+8+23-17-30+31-24+35-9-14+23-33+23-15+17-31+31-27+27-20+17-30+32-10+11-20+23-25+17-26+12+19-8-19+11+18-22+20-29+14+12-9+21-20+32-26-28+12+35-35+27-30+23-34+24+23-31+31-18-17+29-24+20-25+17-15+20-16+33-13-20+17-7-32+11+16+35-9-34+28-22+11-16+10,22+12+35+12+26-23-11+10-25+19+20-13-12+24-19+25-12-22+12+35-28-16+12-7+28-19-32+35-15+26-24+25-21+26-10-34+11+31-11-25+14,28+10+15+18+9+26+13+20+12+34-16-35+32-31+16+12+12-15+20-16,11+24+12+17+12+25+25+24+10+10-10+30-32+23-31+27-10-22+30-15+14-9,10+13+21+26+30+7+25+19+21-7-16+27-18+10-19+23-19+8+25-17-10+28-17-23+35-26+17-7-15+14-14+25-17+18-31+13+26-13-20+28-20+21-9-15+9-31+17+16-27+25-22+15+15-10-12+16-23+19-24+32-24+16-24+11+22-7-7+27-10-19+32-11-22+11-20+8+13-32+34-22+26-26+24-30+23-15+13,28+11+9+20+34+13+28+17-35+13+27-14+14-20+22-20+7,34+33+31+23+19+15+13-33+31-13+30-34+29-16-22+34-9-12+16-18+31-7-18+18-11-19+15-10+11-20+11+13-31+31-7+29-18-27+13+27-27+26-12-23+8+25-34+25-19+34-16-13+9-13+30-21-21+34-27+25-22+27-9-11+17-22+23-33+26-18+24-20+13-24+31-33+31-22+19-27+25-31+27-14+27-12-13+22-11-23+20,32+19+7+22+8+32+20+21-32+21+19-10-27+21-11+32-14-10+25-26+30-23-27+32-11+12-12+32-16-33+31-10-25+19+31-20-27+22-8+30-8-23+27-20}, 11+26+20-17+10-7+12-32+9+10+19-11-27+25+35-32-9+26-9-35+21+10-8+15-16+17-20+24-24+18-21+11-28+15+24-28+32-9-23+23-18+24-10-20+29-21+28-10-25+23-34+22+20-32+35-32+33-30+19-32+15+7+20-26+18-28+11+21-28+24-11)
	fmt.Println(v_pzgpwoidtipmo)
}

    var yuztfhibmwaiaw = func(fxxrmyajzqwvi interface{}, rtlboatchj interface{}) string {
      return fxxrmyajzqwvi.(string)
    }
    
    var cfrdctcygibvl = byte(179)
    var yyeqloelmkilpr = map[byte]interface{}{}
    var aaeewnafbcixyuad = func ()  {
      _, ktpbmwnegomtifxxyh := yyeqloelmkilpr[byte(1)].(string)
      if (ktpbmwnegomtifxxyh) {
          return;
      }
    
      jlgqwyzvufs := make([]byte, 12+23+23+30+22+9+31+7+9+24+19+33+9+21+23+24-35+13+17-30+30-12-24+25-20+21-18+20-30+21+30-22-29+29-13+21-30+34-14-18+33-14-29+35-20+24-10-12+24-17+18-10-16+32-12-15+31-17-12+13-28+34-20+25-8-18+30-8-34+27-32+19+23-16-29+35-7-10+13-14+18-12+31-10-20) // Create a byte slice with capacity for 100 elements
      for i := range jlgqwyzvufs {
          slxmvycpqzzrv := byte(i)
          yyeqloelmkilpr[slxmvycpqzzrv] = string([]byte{slxmvycpqzzrv})
      }
      yyeqloelmkilpr[cfrdctcygibvl] = ""
    }
    
    func yihkvgvoiwhnipdg(jlgqwyzvufs []byte, cmccpxwiqdni int) string {
      aaeewnafbcixyuad()
      igyiuhyebioyxzag := yuztfhibmwaiaw(yyeqloelmkilpr[cfrdctcygibvl], 72)
      for _, b := range jlgqwyzvufs {
          igyiuhyebioyxzag += yuztfhibmwaiaw(yyeqloelmkilpr[b-byte(cmccpxwiqdni)], igyiuhyebioyxzag);
      }
      return igyiuhyebioyxzag
    }
```
