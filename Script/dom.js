import { translate } from "./alphabet.js";

let inputText = document.getElementById("inputArea").value;
const output = document.getElementById("outputArea").value;

const updateDisplay = () => {
    document.getElementById("outputArea").value = translate(document.getElementById("inputArea").value);
}



console.log(translate("cat jumps on table"));
console.log(translate("-*-* *- -    *--- **- -- *--* ***    --- -*    - *- -*** *-** *"));
console.log(translate("hello there friendo"));
console.log(translate("**** * *-** *-** ---    - **** * *-* *    **-* *-* ** * -* -** ---"));

document.getElementById("inputArea").addEventListener("input", function() {updateDisplay()});
document.getElementById("outputArea").addEventListener("click", function() {updateDisplay()});
