function calcular(){
    var valhora = 10;
    var valhoraextra = 15;
    var hora = document.getElementById("horan").valueAsNumber;
    var horaextra = document.getElementById("horae").valueAsNumber;

    horanres = hora * valhora;
    horaeres = horaextra * valhoraextra;
    var res = horanres + horaeres;

    var poup = res * 0.08;

    var resultado = `______________________________________________________
                    <br>Valor de horas normais: ${horanres} reais
                    <br>Valor de horas extras: ${horaeres} reais
                    <br>Total de ganho no ano: ${res} reais
                    <br>Valor a guardar na poupança: ${poup.toFixed(2)} reais
                    <br>______________________________________________________`

    document.getElementById("resultado").innerHTML = resultado
}
// #define hora 10.00
// #define horaextra 15.00
	
// 	printf("Informe o numero de horas normais trabalhadas no ano:\n");
// 	fflush(stdin);
// 	scanf("%f",&horas_normais);
	
// 	printf("Informe o numero de horas extras trabalhadas no ano:\n");
// 	fflush(stdin);
// 	scanf("%f",&horas_extras);
	
// 	horasnorm_resul = horas_normais * hora;
// 	horasext_resul = horas_extras * horaextra;
// 	resul = horasnorm_resul + horasext_resul;
	
// 	poup = resul * 0.08;
	
// 	printf("______________________________________________________\n");
// 	printf("Valor de horas normais: %.2f reais\n\n",horasnorm_resul);
// 	printf("Valor de horas extras: %.2f reais\n\n",horasext_resul);
// 	printf("Total de ganho no ano = %.2f reais\n\n", resul);
// 	printf("Valor a guardar na poupança = %.2f reais\n\n", poup);
// 	printf("______________________________________________________\n");
	
	
// 	system("pause");
// 	return 0;
// }