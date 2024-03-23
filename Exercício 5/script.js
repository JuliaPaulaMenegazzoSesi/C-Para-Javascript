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
