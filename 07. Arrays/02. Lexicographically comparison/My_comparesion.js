function comparasion(args) {
    let firstStr = args[0],
        secondStr = args[1];

        if (firstStr>secondStr) {
          console.log("<");
          }
          else if (secondStr>firstStr) {
            console.log(">");
          }
          else {
            console.log("=");
          }
}

comparasion(['hello', 'helo'])
