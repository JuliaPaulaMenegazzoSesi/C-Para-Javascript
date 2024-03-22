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

// #include<stdio.h>
// #include<stdlib.h>
// #include<locale.h>
// int main(){
// 	setlocale(LC_ALL,"Portuguese");
	
// 	int num = 0,cont = 0;
	
// 	printf("_____________________tabuada do 7________________________________\n");
// 	for(cont = 1;cont<=10;cont++){
// 		num = 7;
// 		printf("%d X %d = %d \n",7,cont,7*cont);
// 	}
// 	printf("_____________________tabuada do 8________________________________\n");
// 	for(cont = 1;cont<=10;cont++){
// 		num = 8;
// 		printf("%d X %d = %d \n",8,cont,8*cont);
// 	}
	
// 	system("pause");
// 	return 0;
// }