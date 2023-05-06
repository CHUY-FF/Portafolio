function NumeroPar(){
    let num1 = prompt("Escribe tu numero para saber si es numero par",0);
    
    if(num==0){
        alert("Numero 0 invalido");
    }else{
        if(num%2==0){
            alert("El numero es par");
        }else{
            alert("El numero no es par");
        }
    }
}

function NumerosIguales(){
    let num1 = prompt("Escribe tu primer numero"),
        num2 = prompt('Escribe tu segundo numero');
    if(num1==num2){
        alert('Los numeros son iguales');
    }else{
        alert('Los numeros no coinciden');
    }
}

function NumeroMayor(){
    let num1 = prompt('Escribe tu primer numero');
    if(num1>num2){
        alert('El primer numero es mayor');
    }else{
        alert('El segundo numero es mayor');
    }
}

function NumeroMenor(){
    let num1 = prompt('Escribe tu primer numero');
    num2 = prompt('Escribe el segundo numero');
    if(num1<num2){
        alert('El primer numero es menor')
    }else{
        alert('El segundo numero es menor')
    }
}

function CuentaRegresiva(){
    let num = prompt('¿Desde que numero empieza?');
    alert('Cuenta regresiva');
    for(let i = num; i>=0; i--){
        alert(i);
    }
    alert('Cuenta Normal');
    for(let i = 0; i<=num; i++){
        alert(i);
    }
}

function CuentaRango(){
    let numInicio = prompt('Inicio del rango');
    numFinal = prompt('Fin del rango');
    for(var i = numInicio; i<=numFinal; i++){
        alert(i)
    }
}

function ParesRango(){
    let numInicio = prompt('inicio del rango');
    numFinal= prompt('Final de rango');
    
    for(var i =numInicio; i<=numFinal; i++){
        if(i%2==0){
            alert('el numero '+i+' es par.')
        }
    }
}

function NumeroPositivo(){
    let num = prompt('Escribe tu  numero para saber si es numero positivo o negativo');
    
    if(num>0){
        alert("El numero es positivo");
    }else{
        if(num<0){
            alert('El numero es negativo');
        }
    }
}