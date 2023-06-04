// Require fs for file operations 
// Synchorous way of file operation 
// Using destructing option to perform read operations 
// const {readFileSync, writeFileSync} = require("fs")

// const first = readFileSync('./sample/first.txt', 'utf8')
// console.log(first)
// const second = readFileSync('./sample/second.txt','utf8')
// console.log(second)

// writeFileSync('./sample/result-sync.txt',`The final result is:\n${first}\n${second}`,{flag:'a'})

// Using a variable to perform read operations 
// const fs = require("fs")
// const first = fs.readFileSync('./sample/first.txt','utf8')
// console.log(first)


// Performing read in Async mode 
// Using Destructuring
// const {readFile, writeFile} = require("fs")
// readFile("./sample/first.txt","utf8",(err,data)=>{
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(data)
// })

// Using variables 
// const fs = require("fs")
// fs.readFile('./sample/first.txt','utf8',(err,data)=>{
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data)
// })

// Multiple file read and write using Async mode

// const {readFile, writeFile} = require("fs")

// readFile("./sample/first.txt","utf8",(err,data)=>{
//     if (err){
//         console.log(err);
//         return;
//     }
//     const first = data;
//     readFile("./sample/second.txt","utf8",(err,data)=>{
//         if(err){
//             console.log(err);
//             return;
//         }
//         const second = data;
//         writeFile("./sample/result-async.txt",`Here is the result:\n${first}\n${second}`,(err)=>{
//             if (err){
//                 console.log(err);
//                 return;
//             }
//         })
//     })

// })









