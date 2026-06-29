/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let n = nums.length;
    let k = 0;

    for(let i=0; i<n; i++){
        if(nums[i] !== 0){
            [nums[i] , nums[k]] = [nums[k] , nums[i]];
            k++;
        }
    }
};