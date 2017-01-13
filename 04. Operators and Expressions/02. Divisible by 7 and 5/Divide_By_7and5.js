function DevideBy_7and5 (arguments) {

  let number = Number(arguments);

  if (number % 5 ===0 || number%7===0){
    console.log(`true ${number}`);
  }
  else {
    console.log(`false ${number}`)
  }
}

DevideBy_7and5(['4'])
DevideBy_7and5(['5'])
DevideBy_7and5(['7'])
DevideBy_7and5(['8'])
DevideBy_7and5(['35'])
DevideBy_7and5(['140'])
