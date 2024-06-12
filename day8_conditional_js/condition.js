console.log("Student's name")
console.log("==== Example 1: if statement ====")
let day = true;

if(day){
    console.log("Good morning")
}

console.log("==== Example 2: if-else statement ==== ")
let n1 = 8, n2 = "8"

if(n1===n2){
    console.log("They are equal")
}
else{
    console.log("They are different")
}

console.log("==== Example 3: multiway condition statement ====")
// check if a number is positive, negative, or zero//
let number = 0
if(number>0){
    console.log(`Number ${number} is positive`)
}
else if(number<0){
    console.log(`Number ${number} is negative`)
}
else if(number===0){
    console.log("The number is zero")
}
else{
    console.log(`${number} is undefined`)
}

console.log("==== Example 4: multiway condition statement in prompt function ====")
// if a user enters a number, didn't enter anything, or perssed cancel button//
let n = prompt("Enter a number: ")
console.log(n)

if(n===null){
    console.log("Cancel was pressed")
}
else if(n===""){
    console.log("Ok button was pressed")
}
else if(isNaN(n)){
    console.log(`${n} is string`)
}
else{
    console.log(`${n} is a number`)
}
console.log("==== Example 5: nested conditional statement====")
// Check if a password has at least 6+ charactors and no space//
let password = prompt("Enter a password")

// To find the number of characters in a string, we use the method .length//
if(password.length>=6){
    console.log(`Password ${password} has ${password.length} characters`)
    if(password.indexOf("")=== -1){
        console.log(`Password ${password} DOSN'T HAVE SPACE`)
    }
    else{
        console.log(`Password${password} HAS SPACE`)
    }
}
else {
    console.log(`Password ${password} has less then 6 charactors`)
}

console.log("==== Exercise ====")

console.log("==== Example 6: list ====")
let colors =["red", "olive", "orange", "babyblue","hotpink"]
// All list has an index number that starts with 0 (leftmost)//
console.log(`The third color is ${color[2]}`)

let selector = prompt("Example 6: select a color using an index number")

switch(selector){
    case '0':
        console.log("Selected color = red")
        break
    case '1':
        console.log("Selected color = olive")
        break
    case '2':
        console.log("Selected color = orange")
        break
    case '3':
        console.log("Selected color = babyblue")
        break
    case '4':
        console.log("Selected color = hotpink")
        break
    default:
        console.log("Color is not in the list")    
}

console.log("==== Example 7: string ====")
let greeting ="Good evening"
console.log(`The seventh charactor is ${greeting[6]}`)












