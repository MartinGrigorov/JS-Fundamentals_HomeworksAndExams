function solve(args) {
    let arr = [...args].map(Number),
        count = 1,
        maxcount = 0;


    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === arr[i + 1]) {
            count += 1;
        }
        else{
            maxcount = Math.max(count, maxcount);
            count = 1;
        }
    }
    console.log(maxcount);
}


solve([
    '10','10','10','10','10','10',
    '2',
    '1',
    '1',
    '2',
    '3',
    '3',
    '2',
    '2',
    '2',
    '2'
])
