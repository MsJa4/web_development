console.log("Jenny Burdier")
console.log("==== Example 1: for loop as counter====")
let i = 1;
for(1; i < 5; i++){
    console.log(`iteration = ${i}`)
}

console.log("==== Example 2: for loop as decrement counter ====")
//Create a loop counter 10 to 0 step 1//
for(let n = 10; n>0 ; n--){
    console.log(`iteration = ${n}`);
}
console.log("==== Example 3: condition inside the loop ====")
//Check how many even numbers are in between -5 and 5//
let counter = 0
for(let m = -5; m<5 ; m++){
    console.log(`interation = ${m}`)
    if(m%2 == 0 && m !==0){
        counter++
    }
}
console.log(`There is/are ${counter} even numbers`)

console.log("==== Example 4: While loop as counter ====")
//display number from 0 to 4//
let p = 0
while(p<=4){
    console.log(`iteration = ${p}`)
    p++
}
console.log("==== Example 5: While loop application ====")
//guess number game//
const SECRET = 8

let guessnumber = parseInt(prompt("Guess a number between 1 and 10"))
while(guessnumber !== Secret){
    guessnumber = parseInt(prompt("Guess another number between 1 and 10"))
}
console.log(`Greate! you guessed it! the number is ${SECRET}`)

console.log("==== Example 6: while loop in a list ====")
let colors =["magenta","olive","babyblue"]
let sizeofcolors = colors.length //returns 3//
let index = 0
while(index<sizeofcolors){
    console.log(colors[index])
    index++
}

console.log("==== Example 7: while loop to simulate a password log-in ====")
//terminate the loop if password fails in three attempts//
const password = "peterpan"
let userpassword = prompt("Enter a password")
let numberattempt = 0
while(userpassword !== password){
    numberattempt++
    if(numberattempt>3){
        console.log("Yor account is locked!")
        break
    }
    userpassword = prompt(`You have = ${3-numberattempt}. attempts left. Enter a password agin`)

}
console.log("Have a good day!")

console.log("==== Example 8: do while loop to simulate a withdraw from a bank account ====")
//user try to widthdraw money from an account with balance of $1000//
let widthdraw = 0
let balance = 1000
do{
    widthdraw = parseInt(prompt("How much do you want to widthdraw?"))
    if(widthdraw<=balance){
        balance = balance - widthdraw
    }
    else{
        console.log("Insufficiant amount, try again!")
    }
}while(widthdraw>balance)
console.log(`Your new balance is ${balance}`)

console.log("==== Example 9: simulate a bank transaction ====")
//simulate the collection of a pin number//
//Ask the user to pick a transation: view the balance, deposit, or widthdraw//
//Use flow control(if, else, ifelse if)//
//Ask the user if they want another transaction//
//Print results//

///Lab 5 through 9, and project 1 are due saturday, june 15 midnight/


