//document.body.style.background="blue";
//DOM Manipulation Method

//document.getElementById('id name')
//document.getElementByClassName('class name')
//document.getElementByTagName('tag name')
//document.querySelector('') //it selects only first element
//document.querySelectorAll('')

//let a=document.getElementById('id1')
//console.log(a);

//document.querySelector('#id1').innerHTML="New Heading"

//function add(){
 //   let value1 = parseInt(document.getElementById('v1').value)
 //   let value2 = parseInt(document.getElementById('v2').value)
 //   let result=value1+value2
  //  document.getElementById('output').innerHTML = result
//}

//function subtract(){
   // let value1 = parseInt(document.getElementById('v1').value)
    //let value2 = parseInt(document.getElementById('v2').value)
   // let result=value1-value2
   // document.getElementById('output').innerHTML = result
//}

//function multiply(){
    //let value1 = parseInt(document.getElementById('v1').value)
  //  let value2 = parseInt(document.getElementById('v2').value)
    //let result=value1*value2
  //  document.getElementById('output').innerHTML = result
//}

//function divide(){
 //   let value1 = parseInt(document.getElementById('v1').value)
 //   let value2 = parseInt(document.getElementById('v2').value)
 //   let result=value1/value2
  //  document.getElementById('output').innerHTML = result
//}

//filter

//let arr=[25,6,78,12,9,18,17,45]
//let newArr= arr.filter(function test(x){
//    return x>25
//})

//console.log(newArr);

//Reduce

let arr2=[5,6,7,8]
let newArr2=arr2.reduce(function opt(num1,num2){
    return num1*num2
})
console.log(newArr2);


