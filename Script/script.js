import { alphabet } from "./alphabet.js";

const translate = (character) => {
    // morse to text
    if (/[a-z]/gi.test(character) === false) {

        const morseArr = character.toLowerCase().split("    ");
        const lettersArr = (morseArr.map(n => n.split(" ")));
        lettersArr.forEach(element => element.push("    "));  
        const flatArr = lettersArr.flat();
        const translatedArr = flatArr.map(char => 
            char = alphabet.find(n => n.morse === char).letter
        );            
        return translatedArr.join("").slice(0, -1);
    } 
    else {
        const lettersArr = character.split(" ");
        const morseArr = (lettersArr.map(n => n.split("")));
        morseArr.forEach(element => element.push(" "));
        const flatArr = morseArr.flat();
        const translatedArr = flatArr.map(char => {
            if (char === " ") {
                return char = alphabet.find(n => n.letter === char).morse.slice(0, -1)
            } else            
            return char = `${alphabet.find(n => n.letter === char).morse} `
         });
        return translatedArr.join("").slice(0, -4);
    }
};


        //     alphabet.find((o, i) =>{
        //         if (o.morse === char) {
        //             char = alphabet[i].letter;
        //         }
        //     });
        // });
    
            // if (alphabet.findIndex(char)) {
            //     alphabet.findIndex(char).letter
        //     }
        //     // return alphabet.find(n => n.morse === element).letter;
        // });
        
    


console.log(translate("cat jumps on table"));
console.log(translate("-*-* *- -    *--- **- -- *--* ***    --- -*    - *- -*** *-** *"));
console.log(translate("hello there friendo"));
console.log(translate("**** * *-** *-** ---    - **** * *-* *    **-* *-* ** * -* -** ---"));
        
        //     alphabet.find(n => n.morse === element).letter);
        // return flatArr;

            // return lettersArr.forEach(element => element.forEach(nested => 
        //     alphabet.find(n => n.morse === nested).letter
        //     ));


            


//             {
//             if (nested === morse.morse) 
//             {const morse = alphabet.find(n => n.morse === character);
//             return n = morse.letter;}
        
        
//         }));

//     };
// };


    // const char = alphabet.find(n => n.letter === character);
    // const morse = alphabet.find(n => n.morse === character);

    // if (character === char.letter) {
    //     return char.morse;

    // } else if (character === morse.morse) {
    //     return morse.letter;
    // } else return character;


