function jump(args) {
    let number = args.map(Number),
        n = args[0],
        result = 0,
        simplifiedResult = 0,
        i = 0;


    for (let i = 1; i < n; i) {
        if (number[i] % 2 === 0) { //четно
            result += number[i];
            i +=2;

        }
        else { //нечетно
            result *= number[i];
            i +=1;
        }
        // simplifiedResult === result % 1024;
    }

    console.log(result);
    // console.log(simplifiedResult);
}

jump([
    '10',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0'
])

jump([
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9'
])
