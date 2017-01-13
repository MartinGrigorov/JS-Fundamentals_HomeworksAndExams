function area_parameter_rectangle(arguments) {

    let width = parseFloat(arguments[0]),
        height = parseFloat(arguments[1]),
        area,
        perimetur;

        area=width*height;
        perimetur= 2*(width + height);

        console.log(`the rectangle's ${area.toFixed(2)} and ${perimetur.toFixed(2)}`);
}

area_parameter_rectangle(['2','19'])
area_parameter_rectangle([5.2, 5]);
area_parameter_rectangle([0.1, 5]);
area_parameter_rectangle([3, 4]);
