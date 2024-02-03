function twoSum(nums: number[], target: number): number[] {
    const obj: Record<number, number> = {};
    for (let i = 0; i < nums.length; i++) {
        let complement: number = target - nums[i];
        if (obj.hasOwnProperty(complement)) {
            // Return the indices of the numbers that add up to the target
            return [obj[complement], i];
        }
        obj[nums[i]] = i;
    }
    return [];
}

console.log(twoSum([3, 2, 4], 6));
