/**
 Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
 The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

 @param {number[]} nums
 @return {number[]}
*/

function removeDuplicates(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                nums.splice(j, 1);
                j--;
            }
        }
    }
    return nums;
};

console.log(JSON.stringify(removeDuplicates([1, 1, 2])) === JSON.stringify([1,2]));
console.log(JSON.stringify(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])) === JSON.stringify([0, 1, 2, 3, 4]));