/**
 * Jenny Burdier
 * June 15, function and object
 */
console.log("student full name")
//function to print a something//
function msg(){
    console.log("Hello World!")
}

//function to print numbers between 1 to 3, inclusive//
function printcount(){
    for(let x = 1; x<=3 ; x++){
        console.log(x)
    }
}

//function that passes a name as argument//
function greeting(name){
    console.log(`Welcome to JavaScript ${name}`)
}
//function that passes multiple arguments//
function fullname(firstname, lastname){
    console.log(`Welcome to JS ${firstname} ${lastname[0]}`) //last name [0] to print the first charactor of the last name//
}

let firstname ="Peter"
let lastname = "Pan"

fullname(firstname, lastname)

// function without parameters but returns a value//
function sumxy(){
    let x = 10
    let y = -12
    return x=y
    //Any lines afther the first return will not be executed//
    x = x+2
    y = y+5
    return x+y
}

//function with parameters and returns a value//
function sum(x,y){
    return x+y
}
//calling sum()//
let s = sum(5,10)
console.log(`The sum is ${s}`)

//function to check if a number is positive//
function checkpositive(number){
    if(number>0){
        return true
    }
    else{
        return false
    }
    
}

//call the function//
let n = -5
let check = checkpositive(n)
console.log(`is number ${n} positive? ${checkpositive(n)}`)

//save the function in a variable//

/*function addition(num1, num2){
    return num1+num2
}
*/

const addition = function(num1, num2){
    return num1+num2
}

/*
//Regular variable function//
const product = function(num1, num2){
return num1 * num2}
*/
//Arrow function//
const product = (num1,num2) => {return num1*num2}

//Anoymous function//
( 
function(){
    console,log("This is an anonymous function")
}
)();

(
    ()=>{console.log("This is an anonymous function using arrow")}
)();

//Object//
/*Real world objects are all around us, and they each have attributes and hehaviors that can describe
-attributes describe the features that an object has.
-behaviors describe actions that an object can perform.
*/
//Car is the object//
let car ={
//attributes (properties)//
make:"Jeep",
year:2021,
model:"Wrangler",
startmileage : 10,
endmileage: 50,

//behaviors:(methods, function)//
accelerate : function(){return this.model },
break: function(){return this.make},
distancetravel: function(){return this.endmileage - this.startmileage}
}

//Add a method 'start' to the car object//
car.start = function(){
    return `${this.make} ${this.model} is running`
}