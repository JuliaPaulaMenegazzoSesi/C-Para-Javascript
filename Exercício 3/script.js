function calcularMedia() {
    var nota1 = document.getElementById("nota1").valueAsNumber;
    var nota2 = document.getElementById("nota2").valueAsNumber;
    var nota3 = document.getElementById("nota3").valueAsNumber;

    var media = (nota1 + nota2 + nota3) / 3;
    var status = "";

    if (media >= 9){
        status = "Conceito: A,  APROVADO"
    } else if (media >= 7.5 && media < 9){
        status = "Conceito:  B, APROVADO"
    } else if (media >= 6 && media < 7.5){
        status = "Conceito: C,  APROVADO"
    } else if (media >= 4 && media < 6){
        status = "Conceito: D, REPROVADO"
    } else {
        status = "Conceito: E,  BURRO"
    }

    document.getElementById("resultado").innerHTML = status
}

// 	media = (nota1+nota2+nota3) / 3;
// 	printf("\n");
// 	printf("Média: %.2f .\n",media);	
	
// 	if(media >= 9){
// 		conceito = 'A';
// 		printf("Conceito: %c , APROVADO.\n",conceito);
// 	}
// 	else{
// 		if(media >= 7.5 && media < 90){
// 			conceito = 'B';
// 			printf("Conceito: %c , APROVADO.\n",conceito);
// 		}
// 		else{
// 			if(media >= 6 && media < 7.5){
// 				conceito = 'C';
// 				printf("Conceito: %c , APROVADO.\n",conceito);	
// 			}
// 			else{
// 				if(media >= 4 && media < 6){
// 					conceito = 'D';
// 					printf("Conceito: %c , REPROVADO.\n",conceito);
// 				}
// 				else{
// 					if(media < 4){
// 						conceito = 'E';
// 						printf("Conceito: %c , BURRO.\n",conceito);
// 					}
// 				}
// 			}
// 		}
// 	}
		
// 	system("pause");
// 	return 0;
// }