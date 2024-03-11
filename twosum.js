function twosum(nums,target) {
    for (let i=0;i<nums.length;i++){
        for (let j=1;j<nums.length;j++) {
            if (nums[i]+nums[j]==target) {
                return [i,j]
            }
        }
    }
    return []
}


let nums = [13,45,50,5]
let ans = twosum(nums,55)
ans.forEach((x)=>{
    console.log('Result of two sums is index: ', x)
})
