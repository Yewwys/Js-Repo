// String,number,Boolean,Array,Object
let fname = 'Yew'
const idcard = '1509966436468'
let num = 10
let Men = true

fname = 'Y'

console.log("My name is",fname,"and my number is",num)
console.log(idcard)




//operators +,-,*,/ 

let a = '10'
let b = '20'
let c = a+b
console.log(c)


// condition if else
/*
    ==,!=,>,>=,<,<=
*/

let num1 = 5
let num2 = 5
let cond = num1==num2
console.log(cond)

// หาตัวเลขคู่

let first = prompt('Enter Your number')
let check = first%2==0

if (first%2==0) {
    console.log('Your number is even')
}
else if (first=='A'){
    console.log('Jackpot!!')
}
else {
    console.log('Your number is odd')
}