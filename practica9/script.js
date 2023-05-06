function sumar(){
    let num1 = document.getElementById('num1').value,
        num2 = document.getElementById('num2').value, resultado;
    
    resultado = parseInt(num1)+parseInt(num2);
    
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    
    document.getElementById('resultado').innerHTML = resultado;
}

function restar(){
    let num1 = document.getElementById('num1').value,
        num2 = document.getElementById('num2').value, resultado;
    
    resultado = parseInt(num1)-parseInt(num2);
    
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    
    document.getElementById('resultado').innerHTML = resultado;
}

function multiplicar(){
    let num1 = document.getElementById('num1').value,
        num2 = document.getElementById('num2').value, resultado;
    
    resultado = parseInt(num1)*parseInt(num2);
    
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    
    document.getElementById('resultado').innerHTML = resultado;
}

function dividir(){
    let num1 = document.getElementById('num1').value,
        num2 = document.getElementById('num2').value, resultado;
    
    resultado = parseInt(num1)/parseInt(num2);
    
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    
    document.getElementById('resultado').innerHTML = resultado;
}