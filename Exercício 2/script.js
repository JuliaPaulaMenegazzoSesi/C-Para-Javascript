function tabuadas(){
    tabuada7();
    tabuada8();
}

function tabuada7(){
    var t7 = document.getElementById("t7");
    var tabuada = "";

    for (var i = 0; i <= 10; i++) {
        var resultado7 = 7 * i;
        tabuada += "7 * " + i + " = " + resultado7 + "<br>";
    }

    t7.innerHTML = tabuada;
}

function tabuada8(){
    var t8 = document.getElementById("t8");
    var tabuada = "";

    for (var i = 0; i <= 10; i++) {
        var resultado8 = 8 * i;
        tabuada += "8 * " + i + " = " + resultado8 + "<br>";
    }

    t8.innerHTML = tabuada;
}
