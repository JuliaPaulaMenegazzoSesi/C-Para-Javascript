function desconto(){
    var tempo = document.getElementById("tempo").valueAsNumber
    var valor = document.getElementById("valor").valueAsNumber
    var resultado = ""

    if (tempo >= 5){
        if(valor > 5000){
            valor = valor - valor * 0.2
            resultado = `Desconto: 20%<br>Valor a ser pago: R$${valor.toFixed(2)}`
        }
        else{
            valor = valor - valor * 0.1
            resultado = `Desconto: 10<br>Valor a ser pago: R$${valor.toFixed(2)}`
        }
    }
    else{
        resultado = `Sem desconto<br>Valor a ser pago: R$${valor.toFixed(2)}`
    }

    document.getElementById("resultado").innerHTML = resultado
}

