// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?

var majorityElement = function(nums) {
    let major = 0
    let element
    let counter = {}
    nums.forEach(e => {
        counter[e] = counter[e] + 1 || 1
        if(counter[e] > major){
            major = counter[e]
            element = e
        }
    })
    return element
};

//cool shorter version trick:

// var majorityElement = function(nums) {
//     let counter = {}
//     for(let i = 0; i < nums.length; i++){
//         counter[nums[i]] = counter[nums[i]] + 1 || 1
//         if (counter[nums[i]] > nums.length / 2) {
//             return nums[i]
//         }
//     }

// };

