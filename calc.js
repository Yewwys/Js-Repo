//  Calculater js 

let num1 = prompt('Enter number')
let oper = prompt('Enter operator')
let num2 = prompt('Enter second number')
num1 = Number(num1)
num2 = Number(num2)
if (oper=='+') {
    let add = num1 + num2
    console.log('Your result is', add)
} else if (oper=='-'){
    let sub = num1 - num2
    console.log('Your result is', sub)
}
else if (oper=='*'){
    let mul = num1 * num2
    console.log('Your result is', mul)
}else if (oper=='/'){
    let divide = num1 / num2
    console.log('Your result is', divide)
}else if (oper=='%'){
    if (num2==0){
        console.log("Result can't modulus by zero")
    }else {
        let mod = num1 % num2
        console.log('Your result is', mod)
    }
} else if (oper=='^') {
    let exp = num1**num2
    console.log('Your result is', exp)
} else {
    console.log('We did not have operator like that, Sorry!!')
}

