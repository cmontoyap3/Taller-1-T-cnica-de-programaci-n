//1. declarar una variable llamada nombre y asignale tu nombre como valor//
let nombre = "Cristian"
console.log(nombre)

//2. Crea una variable llamada edad y asignale tu edad//
let edad = 18
console.log(edad)

//3. Declara una variable 'esEstudiante' y asugale un valor booleano//
let esEstudiante = true;
console.log(esEstudiante)

//4.Crea una variable llamada puntaje y no le asignes ningun valor inicial//
let puntaje;
console.log(puntaje)

//5.Declara una variable hobbies que contenga un array con tus hobbies.//
let hobbies=["Correr","Ajedrez","Trotar"]
console.log(hobbies)

//6.Crea un objeto persona que contenga tres propiedades: nombre, edad y esEstudiante.
if(true){
   let nombre = "Cristian"
   let edad = 18
   let informacion = "esEstudiante"
    console.log(nombre,edad,informacion)
}

//7.Declara una variable nullVar y asígnale el valor null.//
let nullVar = null
console.log(nullVar)

//8.Crea una variable indefinida sin asignarle un valor./
let indefinida;

//9.Declara una variable numeroHex que contenga un número hexadecimal.//
let numeroHex = 0x4A
console.log(numeroHex)

//10. Crea una variable nombreCompleto que concatene tu nombre y tu apellido.//
if(true){
    let nombre = "Cristian"
    let apellido = "Montoya"
    let nombreCompleto = nombre + " " + apellido
    console.log(nombreCompleto)
}

//11. Suma dos números y almacena el resultado en una variable suma.//
if(true){
let num_1 = 8
let num_2 = 5
let suma = num_1+num_2
console.log(suma)
}

//12. Resta dos números y guarda el resultado en una variable resta.//
if(true){
    let num_1 = 6
    let num_2 = 4
    let resta = num_1-num_2
    console.log(resta)
}

//13. Multiplica dos números y asigna el resultado a una variable multiplicacion.//
if(true){
    let num_1 = 5
    let num_2 = 9
    let multiplicación = num_1*num_2
    console.log(multiplicación)
}

//14. Divide dos números y almacena el resultado en una variable division.//
if(true){
    let num_1 = 10
    let num_2 = 2
    let division = num_1/num_2
    console.log(division)
}

//15. Usa el operador de módulo para encontrar el residuo de 10 dividido por 3 y almacena el resultado en una variable modulo.//
if(true){
    let modulo = 10 % 3
    console.log(modulo)
}

//16. Incrementa el valor de una variable contador en 1 usando el operador de incremento.//
if(true){
    let contador = 5
    contador++
    console.log(contador)
}

//17. Decrementa el valor de una variable contadorDec en 1 usando el operador de decremento.//
if(true){
    let contador = 9
    contador--
    console.log(contador)
}

//18. Compara dos números para ver si son iguales y almacena el resultado (booleano) en una variable sonIguales.//
if(true){
    let num_1 = -6
    let num_2 = 6
    sonIguales = true

    if((num_1 > num_2)||(num_1 < num_2)){

        console.log(sonIguales = false)

    }else if (num_1 == num_2){

        console.log(sonIguales = true)
    }
}

//19. Comprueba si un número es mayor que otro y guarda el resultado (booleano) en una variable esMayor.//
if(true){
    let num_1 = 15
    let num_2 = 12
    esMayor = true

    if(num_1 > num_2){

        console.log(esMayor = true + ": " + "num_1 es mayor a num_2")

    }else if (num_1 < num_2){
        
        console.log(esMayor = true + ": " + "num_2 es mayor a num_1")
        
    }else if(num_1 == num_2){

        console.log(esMayor = false + ": " + "Ambos números son iguales")
    }
}

//20. Utiliza el operador de asignación compuesta para sumar y asignar un valor a una variable.
if(true){
    let num = 10
    num += 5
    //Prácticamente es lo mismo que escribir (num = num + 5) pero de manera resumida...
     console.log(num)
}