function desconto(){
    var tempo = document.getElementById("tempo").valueAsNumber
    var valor = document.getElementById("valor").valueAsNumber
    var resultado = ""

    if (tempo >= 5){
        if(valor > 5000){
            valor = valor - valor * 0.2
            resultado = `Desconto: 20%<br>Valor a ser pago: ${valor}`
        }
        else{
            valor = valor - valor * 0.1
            resultado = `Desconto: 10<br>Valor a ser pago: ${valor}`
        }
    }
    else{
        resultado = `Sem desconto<br>Valor a ser pago: ${valor}`
    }

    document.getElementById("resultado").innerHTML = resultado
}

// #include<stdio.h>
// #include<stdlib.h>
// #include<locale.h>
// int main(){
// 	setlocale(LC_ALL,"Portuguese");
	
// 	int time;
// 	float value;
	
// 	printf("INFORME O TEMPO DE FIDELIDADE:");
// 	fflush(stdin);
// 	scanf("%d",&time);
// 	printf("INFORME O VALOR GASTO NA COMPRA :");
// 	fflush(stdin);
// 	scanf("%f",&value);
	
// 	if(time >= 5){
// 		if(value > 5000){
// 			printf("20%%.\n");
// 		}
// 		else{
// 			if(value > 1000){
// 			printf("10%%.\n");
// 			}
// 			else{
// 				printf("SEM DESCONTO");
// 			}
// 		}	
// 	}
// 	else{
// 		printf("SEM DESCONTO");
// 	}
	
// 	system("pause");
// 	return 0;
// }