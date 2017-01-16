function exchangesIfgreater(arguments) {
    let a = arguments[0],
        b = arguments[1];

        if (a>b) {
          console.log(b, a);
        }
        else {
          console.log(a,b);
        }
}

exchangesIfgreater(['5', '2'])
exchangesIfgreater(['3', '4'])
exchangesIfgreater(['5.5', '4.5'])
