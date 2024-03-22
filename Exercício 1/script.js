function enviar() {
    var code = document.getElementById("code").value
    var age = document.getElementById("age").value
    var height = document.getElementById("height").value
    var weight = document.getElementById("weight").value

    document.getElementById("infoCode").textContent = code;
    document.getElementById("infoAge").textContent = age;
    document.getElementById("infoHeight").textContent = height;
    document.getElementById("infoWeight").textContent = weight;
}

// #include<stdio.h>
// #include<stdlib.h>
// //exercico 10

// int main(){
// 	int code, age;
// 	float height, weight;
	
// 	printf("Qual o codigo:");
// 	 scanf("%d", &code);
// 	printf("Qual o idade:");
//    	 scanf("%d", &age);
// 	printf("Qual o altura:");
// 	 scanf("%f", &height);
// 	printf("Qual o peso:");
// 	 scanf("%f", &weight);
// 	printf("\n");
	
// 	printf("O competidor %d , tem %d anos, pesa %.2f Kg e tem %.2f de altura. \n", code, age, weight,height);
	
// 	system("pause");
// 	return 0;
// }		 