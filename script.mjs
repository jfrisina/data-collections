// Part 1: Refactoring Old Code--------------------------------------
console.log(`Part 1: Refactoring Old Code----------------------------`);

// Set variables
let string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
let cell = ``;
let row = ``;
let counter = 0;

// - Loop through the characters of a given CSV string.

for (let char in string) {
    if (char === `,`) {
        row.push(cell);
        cell = ``
    } else if (char === `\n`) {
        console.log(row);
        row = ``;
    } else {
        cell += char;
        console.log(`char: ${char}`)
    }
}







// for (let char of string) {
//     if (char === ',') {
//         row.push(cell);
//         cell = ``;
//     } else if (char === `\n`) {
//         cell += char;
//         console.log(row);
//         row = [];
//         cell = ``;
//     } else {
//         cell += char;
//     }
// }

            
// - Store each “cell” of data in a variable.
// cell.push();

// - When you encounter a comma, move to the next cell.
//.join(`${cell}, `)

// - When you encounter the “\r\n” sequence, move to the next “row.”
//row.push(cell)

// - Log each row of data.
//console.log(row)

// -- You do not need to format the data, the following works well:
//    console.log(cell1, cell2, cell3, cell4);

