function Cakes(args) {
    let sum = parseInt(args[0]),
        cake1 = parseInt(args[1]),
        cake2 = parseInt(args[2]),
        cake3 = parseInt(args[3]),
        maxMoneyAmount = 0;

    for (let i = 0; i < sum / cake1; i++) {
        for (let j = 0; j < sum / cake2; j++) {
            for (let k = 0; k < sum / cake3; k++) {

                let priceForAll = i * cake1 + j * cake2 + k * cake3;

                if (priceForAll <= sum) {
                    maxMoneyAmount = Math.max(maxMoneyAmount, priceForAll);
                } else {// for optimization
                    break;
                }
            }
        }
    }
    console.log(maxMoneyAmount);
}

Cakes([110, 13, 15, 17]); // 110
Cakes([20, 11, 200, 300]); // 11
Cakes([110, 19, 29, 39]); // 107
