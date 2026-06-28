/**
 * @param {number[]} nums - Input array
 * @param {number} val - Value to remove from the array
 * @return {number} - Number of elements remaining after removal
 */
var removeElement = function(nums, val) {
    // Store the length of the array
    let n = nums.length;

    // k will keep track of the position
    // where the next valid element should be placed
    let k = 0;

    // Traverse the entire array
    for (let i = 0; i < n; i++) {

        // If the current element is not equal to val,
        // keep it in the array
        if (nums[i] != val) {
            // Place the valid element at index k
            nums[k] = nums[i];

            // Move to the next position for valid elements
            k++;
        }
    }

    // Return the count of elements that are not equal to val
    return k;
};