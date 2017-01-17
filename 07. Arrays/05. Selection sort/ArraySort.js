function arraySort(args) {
    let arr = args.map(Number);

    let sortArr = arr.sort((x, y) => x - y);

    console.log(arr.join('\n'));
}

arraySort([
    '10',
    '36',
    '10',
    '1',
    '34',
    '28',
    '38',
    '31',
    '27',
    '30',
    '20'
])
