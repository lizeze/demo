var twoSum = function (nums, target) {

    let array = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + nums[i + 1] == target) {
            array.push(i);
            array.push(i + 1);
            console.log(array)
            return array
        }
    }

};
twoSum([1, 2, 3, 4, 6, 8, 9], 10);