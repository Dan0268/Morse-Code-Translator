import { alphabet } from "./alphabet.js";

const translate = (character) => {

    // morse to text
    if (/[a-z]/gi.test(character) === false) {

        const morseArr = character.split("    ");
        console.log(morseArr);

        const lettersArr = (morseArr.map(n => n.split(" ")));
        lettersArr.forEach(element => element.push("    "));
        console.log(lettersArr);
        
        const flatArr = lettersArr.flat();
        console.log(flatArr);
        
        const translatedArr = flatArr.map(element => {
            return alphabet.find(n => n.morse === element).letter;
        });
        return translatedArr;
    };
};

console.log(translate("-*-* *- -    *--- **- -- *--*"));
        
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


