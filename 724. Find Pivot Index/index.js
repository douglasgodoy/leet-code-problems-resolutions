const pivotIndex = function(nums) {
    const totalSum = nums.reduce((prev,curr) => prev + curr,0);
    
    let leftSum = 0;
  
    for(let i = 0; i < nums.length; i++) {
        const rightSum = totalSum - leftSum - nums[i]
        if(leftSum == rightSum ) return i;
        leftSum += nums[i];
    }
    return -1;
};

// NOTATION O(n)

console.log('return',pivotIndex([1,2,3]))
console.log('return',pivotIndex([1,7,3,6,5,6]))
console.log('return',pivotIndex([-1,-1,-1,-1,-1,-1]))
console.log('return',pivotIndex([-1,-1,-1,-1,-1,0]))
console.log('return',pivotIndex([-1,-1,-1,-1,-1,1]))

