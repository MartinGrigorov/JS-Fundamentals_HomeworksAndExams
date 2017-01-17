function maxSequence(args) {
    let arr = [...args].map(Number),
        count = 1,
        maxCount = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            count += 1;
        }
        else {
            maxCount = Math.max(count, maxCount);
            count = 1;
            //в елеса по този начин се нулира count;
        }
      }
    console.log(maxCount);
  }

maxSequence([
    '10',
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
