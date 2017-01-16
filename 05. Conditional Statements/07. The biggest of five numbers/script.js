function solve(args) {
    let max = parseFloat(args[0]);

    for (let i = 1; i < args.length; i++) {

        if (max < parseFloat(args[i]))
        {
          max = parseFloat(args[i]);
        }
    }
    console.log(max);
}


solve(['0', '-2.5', '0', '5', '5'])
solve(['-3', '-0.5', '-1.1', '-2', '-0.1'])
solve(['-2', '-22', '1', '0', '0'])
