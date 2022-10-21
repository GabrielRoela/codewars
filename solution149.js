// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

var containsDuplicate = function(nums) {
    return nums.filter(e => nums.indexOf(e) !== nums.lastIndexOf(e)).length > 0
};

// var containsDuplicate = function(nums) {
//     for(let i = 0; i<nums.length; i++){
//         if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])){
//             return true
//         }
//     }
//     return false
// };