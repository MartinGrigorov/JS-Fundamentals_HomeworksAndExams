function theBiggest(args) {

    let theBiggest = +args[0];

    for (var i = 1; i < args.length; i++) {

        if (theBiggest < args[i]) {
            theBiggest =+ args[i]
        }
    }
    console.log(theBiggest);
}

theBiggest(['0', '-2.5', '0', '5', '99'])
theBiggest(['-3', '-0.5', '-1.1', '-2', '-0.1'])
theBiggest(['-2', '-22', '1', '0', '0'])
