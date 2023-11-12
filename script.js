function threeSum(arr, target) {
    let closestSum = Infinity;
    let minDiff = Infinity;

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                const currentSum = nums[i] + nums[j] + nums[k];
                const currentDiff = Math.abs(currentSum - target);

                if (currentDiff < minDiff) {
                    minDiff = currentDiff;
                    closestSum = currentSum;
                }
            }
        }
    }

    return closestSum;
}

modulfunctione.exports = threeSum;
// Original code for reference


// Example Usage:
