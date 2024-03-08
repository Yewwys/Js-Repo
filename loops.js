
// let inp = prompt()
// let num = 8
// inp = Number(inp)
// while (num>=inp) {
//     console.log(num,"\n")
//     num = num - 1
// }



// let count = prompt()
// let state = 7
// count = parseInt(count)

// while (count>0) {
//     console.log(state)
//     state += 3
//     count -=1
// }


// let n = prompt()
// n = parseInt(n)
// let s = 0

// while (n>=5) {
//     s += n
//     n -= 1
// }

// console.log(s)


// let a = prompt()
// let b = prompt()
// let c = prompt()

// a = parseInt(a) ; b = parseInt(b) ; c = parseFloat(c)

// let s = 0

// while (a<=b) {
//     s += c**(a) + a -5
//     a += 1
// }

// console.log(s)


// for (let counter=0; counter<10; counter++) {
//     console.log('Hello')
// }

// let m = prompt()
// let n = prompt()

// m = parseInt(m) ; n = parseInt(n)
// let sum = 0
// for (m;m<n;m++) {
//     if (m%6==0) {
//         sum += m
//     } 
// }
// console.log(sum)

// let a = prompt()
// let b = prompt()
// let r = prompt()
// let s = 0
// a = parseInt(a) ; b = parseInt(b) ; r = parseFloat(r)
// for (a;a<=b;a++) {
//     s += r**a + a -5
// }
// s = s.toFixed(3)
// console.log(s)


// array
let ages = [30,40,50]
console.log(ages)


// 1.แทนที่
ages = [45,20]
console.log(ages)

// 2.ต่อarray
ages.push('Yew',67)
console.log(ages)

ages.pop()
console.log(ages)

if (ages.includes('Yew')) {
    console.log('You are Yewwys')
}

// sort array
let num = ['yew','test','logic']
num.push('ff')
console.log(num)