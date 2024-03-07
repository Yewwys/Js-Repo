

let score = prompt('Enter your score')
score = Number(score)
if (score>=80 && score<=100) {
    console.log('A')
} else if (score>=75 && score<80) {
    console.log('B+')
} else if (score>=70 && score<75) {
    console.log('B')
} else if (score>=65 && score<70) {
    console.log('C+')
} else if (score>=60 && score<65) {
    console.log('C')
} else if (score>=55 && score<60) {
    console.log('D+')
} else if (score>=50 && score<55) {
    console.log('D')
} else if (score<50 && score>=0) {
    console.log('F')
} else {
    console.log('Error')
}

// &&,||, !