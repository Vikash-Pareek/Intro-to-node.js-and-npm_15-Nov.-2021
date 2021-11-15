// 2. Read file asynchronously and synchronously

// Built-in node module
const fs = require('fs');


// Reading file synchronously :
// Returns Buffer data type (Buffer is used to store binary data)
const bufferData = fs.readFileSync('syncReadFile.txt');
// Converts buffer data to string
const data = bufferData.toString();
console.log(data);


// Reading file asynchronously :
/* readFile take 3 arguments :- 
1. Source File Name 
2. encoding value to convert buffer data to readable string 
3. callback function
*/
fs.readFile('asyncReadFile.txt', 'UTF-8', (err, data) => {
    console.log(data);
});