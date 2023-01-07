// Given an binary array nums and an integer k, return true if all 1's are at least k places away from each other, otherwise return false.

 

// Example 1:


// Input: nums = [1,0,0,0,1,0,0,1], k = 2
// Output: true
// Explanation: Each of the 1s are at least 2 places away from each other.
// Example 2:


// Input: nums = [1,0,0,1,0,1], k = 2
// Output: false
// Explanation: The second 1 and third 1 are only one apart from each other.
 

// Constraints:

// 1 <= nums.length <= 105
// 0 <= k <= nums.length
// nums[i] is 0 or 1

var kLengthApart = function(nums, k) {
    let prevOne = nums.indexOf(1)
    for(let i = nums.indexOf(1) + 1; i<nums.length; i++){
        if(nums[i] === 1 && i - prevOne < k + 1){
            return false
        }else if(nums[i] === 1){
            prevOne = i
        }
    }
    return true
};