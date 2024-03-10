let score1 = 70
let score2 = 55

function calculategrade(param) {
    if (param>=80) {
        grade = 'A'
    } else if (param>=70) {
        grade = 'B'
    }
    else if (param>=60) {
        grade = 'C'
    }
    else if (param>=50) {
        grade = 'D'
    } else {
        grade = 'F'
    }
    return grade 
}

let stu1 = calculategrade(score1)
let stu2 = calculategrade(score2)

console.log('Student grade',stu1,stu2)

// Arrow function
let  calgrade = (param)=> {
    if (param>=80) {
        grade = 'A'
    } else if (param>=70) {
        grade = 'B'
    }
    else if (param>=60) {
        grade = 'C'
    }
    else if (param>=50) {
        grade = 'D'
    } else {
        grade = 'F'
    }
    return grade 
}

let x = [10,20,30,44]
let nx = []

for (i=0;i<x.length;i++) {
    console.log('score: ', x[i])
    if (x[i]>=30) {
        nx.push(x[i])
    }
}
nx.forEach((ns)=> {
    console.log('New score', ns)
})

// fliter

let n = [10,20,30]
let n1 = n.filter((s)=> {
    if (s>20) {
        return true
    } else {
        return false
    }
})

n1.forEach((a)=> {
    console.log('n1: ',a)
})

