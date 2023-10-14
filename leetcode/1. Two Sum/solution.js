var twoSum = function(nums, target) {
    var output = [];

    for(let i = 0; i < nums.length; i++) {
        let secondNum = target - nums[i];
        
        for(let j = i + 1; j < nums.length; j++) {
            if(output.length === 2) {
                break
            }
            if (secondNum === nums[j]) {
                output.push(i);
                output.push(j);
            }
        }
    }

    return output; 
};

console.log(twoSum([3,2,3], 6));
console.log(twoSum([2,5,5,11], 10));
console.log(twoSum([ 2, 7,11,15, 2], 9));