function enviar() {
    var code = document.getElementById("code").value;
    var age = document.getElementById("age").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    var texto = `O competidor ${code} possui ${age} anos, pesa ${weight} e mede ${height}`;

    document.getElementById("info").textContent = texto;
}