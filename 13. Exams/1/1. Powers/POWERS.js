function transoformAndSum(args) {
    let k = args[0].split(' ').map(Number)[1],
        numbersForSum = args[1].split(' ').map(Number);

    function transform(num, leftNum, rightNum) {
        if (num === 0) {
            return Math.abs(leftNum - rightNum);
        }
        else if (num % 2 === 0) {
            return Math.max(leftNum, rightNum)
        }
        else if (num === 1) {
            return (leftNum + rightNum)
        }
        else {
            return Math.min(leftNum, rightNum);
        }
    }

    for (let i = 0; i < k; i++) {
      let currentTransformation = []; //празен масив в който ще сложим трансформираните numbersForSum

      for (let j = 0; j < numbersForSum.length; j++) {
        let numberAfterTransform;

        if (j === 0 ) {// ако индекса е нула(тоест първи елемент) по условие неговите съседи са десния и последния
          numberAfterTransform = transform(numbersForSum[j], numbersForSum[numbersForSum.length-1],numbersForSum[1] )
        }
        else if (j===numbersForSum.length-1) {
          numberAfterTransform = transform(numbersForSum[j], numbersForSum[j-1], numbersForSum[0])
        }
        else {
          numberAfterTransform=transform(numbersForSum[j],numbersForSum[j-1], numbersForSum[j+1])
        }
        currentTransformation.push(numberAfterTransform);
      }
      numbersForSum=currentTransformation;
    }
    console.log(numbersForSum.reduce((x,y)=>x+y));
}

transoformAndSum(['5 1', '9 0 2 4 1']);
transoformAndSum(['10 3', '1 9 1 9 1 9 1 9 1 9']);
transoformAndSum(['10 10', '0 1 2 3 4 5 6 7 8 9']);
