// Node Js is a javascript runtime environment.
// It is a free and open source environment.
// IN 2009 Ryan Dahl uses chrome v8 engine in c++ program and made node.exe
//for initializing node project u have to write this command in terminal---
//npm init
//npm -- node package manager - It manage all the package installation and uninstallation inn node js.
//for installing any package u have to write this command on terminal ----------npm install
//nodemon - used for restarting server
//nodemon index.js or npx nodemon index.js ---- for starting nodemon
//for uninstalling any package we have to use -- npm uninstall packageName


console.log("Welcome to Node Js class...")
console.warn("This is a warning")
console.error("This is an error")
console.log(2+2)
console.log("Nodemon installed")

// let fruits=["Mango","Papaya","Pineapple"]
// console.log(fruits);

//  const profile=require('./second.js')
// console.log(profile);
// console.log(profile.car)
// console.log(profile.profile)


//Node js - File system--- create,read,update,delete

const fs=require("fs")

//creating new file

// let data = "Hello everyone, I am Pratheeksha and I am 18 years old..."
// fs.writeFile('file.txt',data,(err)=>{
//     if(err){
//         throw Error
//     }else{
//         console.log("File is created succesfully...")
//     }
// })

//Creating new folder

// fs.mkdir('pratheeksha',(err)=>{
//     if(err){
//         throw error
//     }else{
//         console.log("Folder created successfully ");
//     }
// })

//Reading a file

fs.readFile('file.txt',"utf8",(error,data)=>{
    if(error){
        throw error
    }else{
        console.log(data);
    }
})
