function numberOfcarCombination (args) {
  const s = parseInt(args[0]);
  let result = 0;


  for (let cars = 0; cars*4 <= s; cars++) {
    for (let trucks = 0; cars*4+trucks*10<=s; trucks++) {
      for (let tricks = 0; cars*4+trucks*10+tricks*3 <= s; tricks++) {
        if (cars*4+trucks*10+tricks*3===s) {
          result +=1;
        }
      }
    }
  }
  console.log(result);
}


numberOfcarCombination(['7']); // 1
numberOfcarCombination(['10']); // 2
numberOfcarCombination(['40']); // 11
