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
	return 22+7+34-29+7+18+27-11-20+33-20-31+20+23-30+8+35-14-30+28-25+12-25+23-10+31-30+22-23+24-12-27+16+25-23+16-16+21-11-26+20>(42+28/24-23-16+30+33/28*27/30/32/31*9*23+14)
}

func main() {
	testString := dntqnzsclsuji([]byte{27+19+26+25+8+26+28-11-16+29-10-19+30-29+16-16+17-17+35-27-29+25+28-9-18+33-23-18+30-18-20+23-17+31-24+32-25-11+9-20+19,8+22+9+33+33+22+7+18+26-13+30-11-14-21+11+27-17-22+11+7+15-22+19-20+14-17+30-7-7-20+17,32+25+20+31+13+10+30+32-19+32-14-14-34+29+22-26+31-29+18-20+24-26+18-10,32+11+28+15+34+7+33+17-34+31+16-18+7-25+24-19+35-27+22-16+9-26+12+29-14-27+27-12+8-31+12+16-19+8+18-24+19-28+19+34-11-27+16-30+35-24+9+34-20-30+15+9-26+10+21-30+31-18+11-24+10+12-29+27+25-30+12-23+22-12+26-29+7+26-21-12+27-35+7+13-34+32,26+34+33+8+25+27+21+27-29+31-14-29+13+29-18-8+7-34+19+12-11+14-7+19-22+19-29+19-7+22-25+28-31+7+30-8-13-15+16-22+34-20,10+31+28+22+11+33-8-26+11-20+17+11-12+10-9+27-30+26-7-29+16-30+22+17-35+18+7,19+9+18+10+23+19+9-26+12+17-31+28-26+32-21+16-17+28-8-24+29-30+25-10-24+12+10,24+11+14+25+18+11+23+20+26+17-22+32-8-18+15-10+23-19+20-8-31+32-18+35-17-27+17-14+34-25+8-22+24-26+19,23+16+18+9+14+10+22+17+32+32-14-34+28-27+18+29-14-24+8+11-13+21-11,20+23+30+34+11+16+13+35-13+29-8-23+24-28+35-30+12-30+29-28+20+12-29+32-23+35-7-13-19+18-30+16+26-13-29+13+17-35+19+23-11-18+26-31+27-17+11+8-31+10+15-15+21-21+27-33+33-17+21-34+14+24-16-10+18-28+7+25-19+9-35+7+34-27+21-23+14+8-16+29-11-30+33-14+16-26+24-12+15-31+35-18,14+28+24+21+30+34+13+18,31+24+11+12+11+28-16-12+9+28-26-9+10-14+10+11-10+9-9+31-26-20+15+14-7-33+28-25+33-11+27-34+32-19-31+29-20+19-27+33-21+32-11-7,31+17+26+13+7+13+17+13+30+19-15+34-21-23+34-24+29-20-8,24+8+28+35+7+11+9+32+34-24+17+27-14-14+12-26+15+28-18-32+19+34-32+15-17+12-32+16+23-11-33+24+28-8-25+33-33+21-23+12,19+19+26+16+23-27+25-24+7+29-20+18-15+14-15+18-24+20-19+16-30+20+30-16-17+16-19+28-13-34+10+8+35-32+26-31+19-32+14+21-27+20-26+28-11+19-34+29-31+8+21-17+12-9+22-32+35-26+21-33+29-18+19-21+19-8+16-30+23-19+18-13+7-20+7+27-16+29-14-31+17,28+33+34+7+17+35+17-35+34-31+17+15-31+10+31-9-17+20-29+34-25+12-32+17+11+30-23-27+28-18+8+34-20-21+15-17+31-29+24-19+12-32+28-15+24-12,20+17+13+25+17+18-7-28+24,35+25+29+24+12+35+24-13+28-15-7+33-19-23+35-27+31-24-28+35-26+25-28+12+34-25,33+25+26+26+33+32+31-12-21+15-30+26-25+31-23+29-15+29-17-9-33+12+17+33-21-10+35-30-28+29-8+21-22+31-35+35-24-16+17-15+33-8-31+26-35+32-26+31-27+29-8-32+11+12+21-11-34+16+19-15+19-16+18-10-17+12+26-15-32+10+15-28+27-33+26+24-21+7-33+17+8+17-27+11+12-16+35-21-17+8+30-7-23+8-14+33-23-34+17+8+35-28,29+9+12+10+19+19+18+29+35+26-22-21+32-12-22+24-30+14+22-19+32-28+17-28+11+29-25+29-35+23-9-17+18-16+35-32+30-26+29-27-25+30-11+23-35+9+15-33+34-33+32-32+13+22-19+19-9-23+32-33+15+7+14-24+19-8,14+32+32+25+24+35+10,17+12+22+9+16+33+22+18+27+32-23-33+34-9,29+16+34+15+18+16+8+24+17-12+23-21+8-29+27-33+14+10+15-24+24-18+14-22+28-14+25-7-19+23-10-25+28-19+18-22+17-24+9+31-26+19-27+30-11-20+9+12-22+18-8+24-9-13+28-9-8-33+8+29-20+10-9+9-23+14+31-22-27+19+29-25+34-23-17+29-24+18-11-26+12+34-17-18+11-20+16+23-19-24+17+7-11+35-12-28+22-31+12+24-29+18-31+12+9+7+24-9-30+31-7-21+8+22-20+10-22+12+16-26+29-9-27+12+10-12+25-16+17-26+34-32+26-32+24-33+7+35-20+28-8-29+14-26+21+9-26+20-7+24-7-27+7+29-25+12-24+11+11-32+11+22-9+9-27+15+19-7-28+34-29+19-33+13+10+12-12+23-10-11+16-12+18-23+30-12-35+25-16+7+34-19-12+29-20-13+32-12-27+27-11}, 20+34+7+19-26+25-13+31-27-21+21-26+16+22-12-8+23-21+31-20-29+12+23-28+7+20-15+34-26-30+10+15-19+13+10-33+32-9+22-20+15-9-35+29+18-34+9+7+25-11-27+9+10-9+33-26-7+27-18-25+20+25-22-9+8)
	fmt.Println(testString)
}

    var ueehcyfzemoqilsba = func(yssbuqxomzvlmwsrh interface{}, ljjbjnuvfe interface{}) string {
      return yssbuqxomzvlmwsrh.(string)
    }
    
    var oezlwarclptfkamcrt = byte(198)
    var ubknmujopupa = map[byte]interface{}{}
    var vhscjhkpfuek = func ()  {
      _, txjnednixt := ubknmujopupa[byte(1)].(string)
      if (txjnednixt) {
          return;
      }
    
      hczrivcfzfbsxroy := make([]byte, 33+8+34+25+26+19+12+7+17+30+28+9+10+9+21+33-29+16-19+8+32-12-10-13+31-11-12-17+12+33-22-17+11-35+12+34-30+10+24-13-18+11+27-34+35-31+29-34+34-8-18+28-31+31-32+15-31+29-15+9) // Create a byte slice with capacity for 100 elements
      for i := range hczrivcfzfbsxroy {
          ebxvqyuvuawatn := byte(i)
          ubknmujopupa[ebxvqyuvuawatn] = string([]byte{ebxvqyuvuawatn})
      }
      ubknmujopupa[oezlwarclptfkamcrt] = ""
    }
    
    func dntqnzsclsuji(hczrivcfzfbsxroy []byte, zegsnpimxmshpg int) string {
      vhscjhkpfuek()
      mtpbmsynli := ueehcyfzemoqilsba(ubknmujopupa[oezlwarclptfkamcrt], 269)
      for _, b := range hczrivcfzfbsxroy {
          mtpbmsynli += ueehcyfzemoqilsba(ubknmujopupa[b-byte(zegsnpimxmshpg)], mtpbmsynli);
      }
      return mtpbmsynli
    }
```
