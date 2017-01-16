function solve(args) {
    let firstNum = parseFloat(args[0]);
    let secondNum = parseFloat(args[1]);
    let tempNum;

    if (firstNum > secondNum) {
        tempNum = firstNum;
        firstNum = secondNum;
        secondNum = tempNum;
    }

    console.log(firstNum + ' ' + secondNum);
}

solve(['5', '2'])
solve(['8', '2'])
solve(['3', '4'])
solve(['5.5', '4.5'])
