function solve(args) {
    let numbers = args[1].split(' ').map(Number),
        x = +args[2];

    console.log(getCount(numbers, x));

    function getCount(nums, x) {
        let count = 0;
        for (let num of nums) {
            if (num === x) {
                count += 1;
            }
        }
        return count;
    }
}