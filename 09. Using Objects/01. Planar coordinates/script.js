function solve(args) {
  var i,
    output,
    input = args.map(Number),
    sizes = [],
    step = 4;

  function distance(index) {
    var arr = input,
      a = Math.abs(arr[index] - arr[index + 2]),
      b = Math.abs(arr[index + 1] - arr[index + 3]);

    return Math.sqrt((a * a) + (b * b));
  }

  for (i = 0; i < input.length; i += step) {
    sizes.push(+distance(i));
  }

  if (sizes[0] + sizes[1] > sizes[2] && sizes[1] + sizes[2] > sizes[0] && sizes[0] + sizes[2] > sizes[1]) {
    output = 'Triangle can be built';
  } else {
    output = 'Triangle can not be built';
  }

  console.log(sizes.map(Number).map(function (a) {
    return a.toFixed(2);
  })
    .join('\n'));
  console.log(output);
}