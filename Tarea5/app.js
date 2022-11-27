//Programa que suma dos numeros

function Suma() {
  let numero1 = parseInt(prompt("Digita el numero 1"));
  let numero2 = parseInt(prompt("Digita el numero 2"));

  return alert("La suma es: " + (numero1+numero2));
}

//Programa que te pide tu nombre y lo imprime en pantalla.

function imprimirNombre() {
  let nombre = prompt("¿Cuál es tu nombre?");

  return alert("Tu nombre es: " +nombre);
}

//Programa que evalua si un numero está en el rango del 1-10

function usoAnd() {
  let numero = parseInt(prompt("Digita un numero del 1 al 10"));

  if((numero>=1) && (numero <=10)){
    return alert("Tu numero permanece en el rango del 1-10");
  } else {
    alert("Tu numero esta fuera del rango 1-10");
  }

}

//Programa que evalua con un if si un nuemro permanece dentro del rango 50-100

function usoIf() {
  let numero3 = parseInt(prompt("Digita un numero del 50 al 100"));
  if(numero3 <50 || numero3>100) {
    alert("Tu numero es incorrecto");
  }else {
    alert("Tu numero es correcto");
  }
}

//Programa que simula el entregar un titulo universiotario a una persona

function usoNot(){
  let aprobado = prompt("¿El alumno aprobo? (escriba false si no, escriba true si si.)");
  if(aprobado === 'true'){
    aprobado = true;
  }
  if(aprobado === 'false'){
    aprobado = false;
  }
  let obtenerTitulo = "Usted ha obtenido su titulo";
  let denegarTitulo = "Usted tiene que volver a cursar la materia";

  if(!aprobado) {
    alert(denegarTitulo);
  } else {
    alert(obtenerTitulo);
  }
}

//Programa que te indica si un poder esta activado o desactivado con ayuda de un OR

function usoOr() {
  alert("El poder especial se activara solo cuando el poder = 100 o las runas = true");
  let poder = parseInt(prompt("Digita el numero de poder"));
  let runas = prompt("¿Las runas son false o true?");
  if(runas === 'true'){
    runas = true;
  }
  if(runas === 'false'){
    runas = false;
  }
  let poderEspecial;

  if(poder == 100 || runas == true){
    poderEspecial = "Activado";
    alert("El poder especial esta: " +poderEspecial);
  }else {
    poderEspecial = "Desactivado"
    alert("El poder especial esta: " +poderEspecial);
  }
}

//Programa que adivina un numero

function adivinarNumero() {
  let listaNumeros = [];
  listaNumeros.length =10;


  for (let i = 0; i < 10; i++) {
    let lector = parseInt(prompt("Agregue un número del 1-10"));
    listaNumeros.push(lector);
  }

  alert("Escriba un número y adivinare si está en la lista o no");
  let adivinarNumero = parseInt(prompt());
  while (adivinarNumero != 0){
    if (listaNumeros.includes(adivinarNumero)) {
      alert("Su numero si esta, es el: " +adivinarNumero);

    }else {
      alert("Su numero: "+adivinarNumero +" no está");
    }

    alert("Pregunta por otro numero o presiona 0 para salir");
    adivinarNumero= parseInt(prompt());
  }


}
