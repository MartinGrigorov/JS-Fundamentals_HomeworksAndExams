function oddOrEven (arguments) {
  let num = Number(arguments);

  if (num%2== 0 ) {
    console.log(`even ${num}`)
  }
  else {
    console.log(`odd ${num}`);
  }

}
oddOrEven(['2'])
oddOrEven(['0'])
oddOrEven(['5'])
oddOrEven(['53'])
oddOrEven(['34'])
oddOrEven(['-2'])
