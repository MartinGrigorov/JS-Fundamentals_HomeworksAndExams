function thirdDigit (args) {
  let digit=args[0];

  if (digit.length<3) {
    console.log('false 0');
  }
  else if (digit[digit.length-3]==='7') {
    console.log('true');
  }
  else {
    console.log('false '+digit[digit.length-3]);
  }
}

thirdDigit(['2141414700'])

// function thirdDigid(args) {
//   let number = args[0];
//
//   if (number.length < 3) {
//     console.log('false 0');
//   }
// else if (number[number.length -3] === '7') {
//     console.log('true');
//   } else {
//     console.log('false ' + number[number.length -3]);
//   }
// }
//
// thirdDigid(['701'])
