// const fs = require('fs');
// const filePath = process.argv[2];
// const fileContents = fs.readFileSync(filePath).toString();

// // find the number of newline characters in a file
// //  subtract by 1 since last line does contain a \n
// const numberOfNewLineChars = fileContents.split('\n') - 1;

// console.log(numberOfNewLineChars);

var fs = require('fs');

var filename = process.argv[2];

file = fs.readFileSync(filename);

contents = file.toString();

console.log(contents.split('\n').length - 1);