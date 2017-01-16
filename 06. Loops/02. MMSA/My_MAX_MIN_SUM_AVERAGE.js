function min_max_sum_average(args) {

    let numbers = args.length,
        min = parseFloat(args[0]),
        max = parseFloat(args[0]),
        sum = parseFloat(args[0]),
        average = 0;

    for (let i = 1; i < numbers; i++) {
      // итератора е 1 защото сме задали, че числото на нулевия индекс
      // е мин, макс, сума. тоест към него ще извършим всички операции!
        min = Math.min(min, args[i]);
        max = Math.max(max, args[i]);
        sum += args[i];
    }

    average = sum / numbers;

    console.log(`min = ${min}`);
    console.log(`max = ${max}`);
    console.log(`sum = ${sum.toFixed(2)}`);
    console.log(`avg = ${average.toFixed(2)}`);

}

min_max_sum_average([2, 5, 1]);
// min_max_sum_average([6, 2, -0.1]);
