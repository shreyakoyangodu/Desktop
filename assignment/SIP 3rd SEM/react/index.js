//console.log(9*5);

const { fstat } = require("fs");

// const {state,Divide,vehicle}=require('./new.js')
// console.log(state);
// console.log(Divide(24,15));
// console.log(vehicle);

//for initialising node project u have to write this in command in terminal......
//npm init

//npm--node package manager-It manages all the package  installation and uninstallation in node js
//for installing any package you have to write this command on terminal--------------------npm install packagename or npm i packagename
//for uninstalling any package we have to use ----npm uninstall packagename
//npx nodemon index.js

//to terminate server----control+c,y

// let a=565
// let b=254
// console.log(a*b);
// console.log(a-b);
// console.log(a+b);

//file system in node js-cretae,read,update(append),delete
//const fs=require("fs");

// Create file
// let myData="hi,i am shreya and i am from scem"
// fs.writeFile('myFile.txt',myData,(err)=>{
//     if(err)throw err
//     else console.log("File created successfully");
// });

//Read file dat
// fs.readFile("myFile.txt",(err,data)=>{
//     if(err) throw err;
//     else console.log(data);
// });

// fs.rename("myFile.txt","change.txt",(err)=>{
//       if(err) throw err;
//         else console.log("file renamed");
// });

//  fs.appendFile("change.txt","i am a good boy",(err)=>{
//    if(err) throw err;
//        else console.log("file updated");
//  });

//  fs.unlink("change.txt",(err)=>{
//     if(err) throw err;
//         else console.log("file deleted");
//   });
 
//creating server
//http modules

// const http=require("http");

// const server=http.createServer((req,res)=>{
//     res.end("Welcome to node js server");
// });

// server.listen(5000,"127.0.0.1",()=>{
//     console.log("Server is running at port 5000......");
// });


//node-routing
const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{
  //  console.log(req.url);
        res.setHeader("content-type","text/html");
      let path;
      switch(req.url){
            case "/" :
             path="./Home.html";
             break;

            case "/Contact":
             path="./Contact.html";
             break;

            case "/About":
                path="./About.html";
                break;
                
            default:
                    path="./Error.html";
                break;
      }
      fs.readFile(path,"utf-8",(err,data)=>{

        if(err) console.log("This is an error");
        else res.end(data);
      });
     });

     server.listen(4000,"127.0.0.1",()=>{
        console.log("Server is Running at port 4000");
     });
