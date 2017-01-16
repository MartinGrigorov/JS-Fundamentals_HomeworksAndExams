function fromOneToN(args) {
    let N = args[0];

    for (let i = 1; i < N; i++) {

        process.stdout.write([i] + ' '); // печата всяка итерация на един ред
        // като всъщност process.stdout.write е чат от функцията на console.log
    }

}

fromOneToN(['5'])
