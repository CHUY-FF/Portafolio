/*let a="Hola Mundo";
        console.log(a);
var num1=5, num2=3;
console.log(num1+num2);
let b="Jesus";
console.log(a+" "+b);¨*/

/*let a="Nombre: Jesus";
console.log(a);

let b="Edad: 14";
console.log(b);

let c="Fecha de nacimiento: 23/11/2008";
console.log(c);*/

/*let nom,edad,fecha;
nom=prompt("Nombre:");
edad=prompt("Edad:");
fecha=prompt("Fecha de nacimiento:");

document.getElementById("nombre").innerHTML=nom;
document.getElementById("edad").innerHTML=edad;
document.getElementById("fechadenacimiento").innerHTML=fecha;

document.getElementById("nombre").style.color = '#ffffff';
document.getElementById("edad").style.color = '#ffffff';
document.getElementById("fechadenacimiento").style.color = '#ffffff';*/

/*let nombre, numero_uno,numero_dos, res;
nombre=prompt("Nombre:");
numero_uno=prompt("Numero uno:");
numero_dos=prompt("Numero dos:");


document.getElementById("nombre").innerHTML=nombre;


res = parseInt(numero_uno) + parseInt(numero_dos);

console.log(res);

document.getElementById("resultado").innerHTML=res;*/



let numero_uno,numero_dos, res, res2, res3, res4;
numero_uno=prompt("Numero uno:");
numero_dos=prompt("Numero dos:");
res = parseFloat(numero_uno) + parseFloat(numero_dos);
console.log(res);


numero_uno=prompt("Numero uno:");
numero_dos=prompt("Numero dos:");
res2 = parseFloat(numero_uno) - parseFloat(numero_dos);
console.log(res2);


numero_uno=prompt("Numero uno:");
numero_dos=prompt("Numero dos:");
res3 = parseFloat(numero_uno) * parseFloat(numero_dos);
console.log(res3);


numero_uno=prompt("Numero uno:");
numero_dos=prompt("Numero dos:");
res4 = parseFloat(numero_uno) / parseFloat(numero_dos);
console.log(res4);

document.getElementById("resultado").innerHTML=res;
document.getElementById("resultado2").innerHTML=res2;
document.getElementById("resultado3").innerHTML=res3;
document.getElementById("resultado4").innerHTML=res4;