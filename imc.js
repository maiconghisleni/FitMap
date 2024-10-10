let altura = document.getElementById('altura');
let peso = document.getElementById('peso');
let res = document.getElementById('res');

function calcular(){
    let alturaNum = parseFloat(altura.value)
    let pesoNum = parseFloat(peso.value)

    let imc = pesoNum/(alturaNum * alturaNum)

    if (isNaN(alturaNum) || isNaN(pesoNum)) {
        alert('Um ou mais campos estão vazios ou contêm valores inválidos');
        return;
    }

    if (imc <= 18.5){
        res.innerHTML = `<strong>Seu IMC: ${imc.toFixed(2)}</strong> <br> Abaixo do peso!`
    } else if (imc >= 18.5 && imc <= 24.9){
        res.innerHTML = `<strong>Seu IMC: ${imc.toFixed(2)}</strong> <br> Peso Normal!`
    } else if (imc >= 25 && imc <= 29.9){
        res.innerHTML = `<strong>Seu IMC: ${imc.toFixed(2)}</strong> <br> Sobrepeso!`
    } else if (imc >= 30 && imc <= 34.9){
        res.innerHTML = `<strong>Seu IMC: ${imc.toFixed(2)}</strong> <br> Obesidade grau I!`
    } else if (imc >= 35 && imc <= 39.9){
        res.innerHTML = `<strong>Seu IMC: ${imc.toFixed(2)}</strong> <br> Obesidade grau II!`
    } else if (imc >= 40 && imc <= 49.9){
        res.innerHTML = `<strong>Seu IMC: ${imc.toFixed(2)}</strong> <br> Obesidade grau III!`
    } else if (imc >= 50 && imc <= 59.9){
        res.innerHTML = `<strong>Seu IMC: ${imc.toFixed(2)}</strong> <br> Obesidade grau IV!`
    } else {
        res.innerHTML = `<strong>Seu IMC: ${imc.toFixed(2)}</strong> <br> Obesidade grau V`
    }
}