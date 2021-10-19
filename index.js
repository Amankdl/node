// global object
// ******************

// console.log(global);

// global.setTimeout(() => {//we  don't need to write 'global' as it is already available to the file. (Like window object in brower js)
//     console.log("Hey ! I am clearing the setInterval function");
//     clearInterval(int);
// }, 3000);

// const int = setInterval(() => {
//     console.log("In the time interval");
// }, 1000);

// console.log('Directory name : ',__dirname);
// console.log('File name : ', __filename);

// requiring module
// ********************

// const importedStudents = require('./module2'); //requiring single value.
/**
 * we can give any name to variable while exporting a single value from another module(module2.js).
 * for ex :- const importedStudents is a random variable name. 
 */

const {students, ages} = require('./module2'); //requiring multiple value.
/**
 * we can't give any random name to varibles while exporting multiple values another module(module2.js).
 * for ex :- students and ages both consts are exporting with same name from module2.js 
 */
console.log(students, ages); 