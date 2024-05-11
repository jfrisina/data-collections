// Part 1: Refactoring Old Code--------------------------------------
console.log(`Part 1: Refactoring Old Code----------------------------`);

// Set variables
let string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
let cell = ``;
let rows = [];

// for (let char of string) {
//     if (char === `,`) {
//         rows.push(cell);
//         cell = ``
//     } else if (char === `\n`) {
//         rows.push(cell);
//         console.log(rows);
//         rows = [];
//         cell = ``;
//     } else {
//         cell += char;
//     }
// }



// Part 2: Expanding Functionality --------------------------------------
console.log(`Part 2: Expanding Functionality----------------------------`);

// Begin with the following task:
    // - Declare a variable that stores the number of columns in each row of data within the CSV.
    // - Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

// For example, if the first row of data (the headings) has eight entries, your program should create eight entries per row. You can safely assume that all rows that follow will contain the same number of entries per row.

// After you have implemented the above:
    // - Store your results in a two-dimensional array.
    // - Each row should be its own array, with individual entries for each column.
    // - Each row should be stored in a parent array, with the heading row located at index 0.
    // - Cache this two-dimensional array in a variable for later use.

let numColumns = rows.length;
let mainArray = [];

for (let char of string) {
    if (char === `,`) {
        rows.push(cell);
        cell = ``
    } else if (char === `\n`) {
        rows.push(cell);
        mainArray.push(rows);
        rows = [];
        cell = ``;
    } else {
        cell += char;
    }
}
let colHeaders = mainArray[0];
console.log(mainArray);
console.log(`My row headers are: ${colHeaders}`); 

// Part 3: Transforming Data --------------------------------------
console.log(`Part 3: Transforming Data ----------------------------`);

// In order to make it more obvious what the data is, we will transform our rows into objects.
// Implement the following:
    // For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
    // Convert these keys to all lowercase letters for consistency.
    // Store these objects in an array, in the order that they were originally listed.
    // Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

let keys = mainArray[0]; // column headings
let values = [mainArray[1]];
let lowerKeys = []; // put outside of loop so that it is *initialized* only once. Versus putting it in the loop where it would store each key as a separate array.

let newArray = [];

for (let i = 1; i < mainArray.length; i++) {
    let value = mainArray[i];
    let object = {}; // must initialize this within the loop so that it can move onto the next value instead of repeating the same one over and over again

    for (let j = 0; j < keys.length; j++) {
        object[keys[j].toLowerCase()] = value[j]; // sets the keys equal to the value 
    }
    newArray.push(object);
}
console.log(newArray);


// Part 4: Sorting and Manipulating Data --------------------------------------
console.log(`Part 4: Sorting and Manipulating Data ----------------------------`);

// remove object from the end of the array
console.log("Remove object from the end of the array:")

newArray.pop();
console.log(newArray);

// insert an object into index 1 of the array
console.log("Insert an object into index 1 of the array:")

let objToInsert = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
newArray.splice(1,0, objToInsert)
console.log(newArray);

// insert an object at the end of the array
console.log("Insert an object at the end of the array:")

let anotherObject = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
newArray.push(anotherObject);
console.log(newArray);

// calculate the average age of the group
console.log("Calculate the average age of the group:")


