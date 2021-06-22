class letters {
    constructor(letter, morse) {
        this.letter = letter;
        this.morse = morse;
    }
}

const letterArr = (array, letter, morse) => {
    array.push(
        new letters(letter, morse)
    )
}

let alphabet = [];

letterArr(alphabet, "a", "*-");
letterArr(alphabet, "b", "-***");
letterArr(alphabet, "c", "-*-*");
letterArr(alphabet, "d", "-**");
letterArr(alphabet, "e", "*");
letterArr(alphabet, "f", "**-*");
letterArr(alphabet, "g", "--*");
letterArr(alphabet, "h", "****");
letterArr(alphabet, "i", "**");
letterArr(alphabet, "j", "*---");
letterArr(alphabet, "k", "-*-");
letterArr(alphabet, "l", "*-**");
letterArr(alphabet, "m", "--");
letterArr(alphabet, "n", "-*");
letterArr(alphabet, "o", "---");
letterArr(alphabet, "p", "*--*");
letterArr(alphabet, "q", "--*-");
letterArr(alphabet, "r", "*-*");
letterArr(alphabet, "s", "***");
letterArr(alphabet, "t", "-");
letterArr(alphabet, "u", "**-");
letterArr(alphabet, "v", "***-");
letterArr(alphabet, "w", "*--");
letterArr(alphabet, "x", "-**-");
letterArr(alphabet, "y", "-*--");
letterArr(alphabet, "z", "--**");

letterArr(alphabet, "1", "*----");
letterArr(alphabet, "2", "**---");
letterArr(alphabet, "3", "***--");
letterArr(alphabet, "4", "****-");
letterArr(alphabet, "5", "*****");
letterArr(alphabet, "6", "-****");
letterArr(alphabet, "7", "--***");
letterArr(alphabet, "8", "---**");
letterArr(alphabet, "9", "----*");
letterArr(alphabet, "0", "-----");


export { alphabet };
