



typeof(5)
"number"
typeof("5")
"string"


3+3  8*3
//6  //24
7-3  9/3
//4  //3

"tengo" + 18 + "años"


let nombreDeLaVariable = suValor;

let nombre = 'Mery'

'Hola ' + nombre + ', ¿cómo estas?'

let dineroEnLaCuenta = 100;
let nuevoDeposito = 1200;
let comisionBancaria = 0.05;
(dineroEnLaCuenta+nuevoDeposito)* comisionBancaria


"Mi nombre es "+ nombre + " , tengo" + edad + " y estoy cursando en el" + stage + "."


let edad = parseInt(prompt("Ingrese su edad"))
// El usuario ingresará un String con su edad y ParseInt lo convertirá en un número.
let cumpleaños = edad + 1
// Se define una Variable con una operación matemática para saber cuántos años tendrá en
un año.
alert("En un año tendrás "+ cumpleaños + " año de edad")
// Le darás un mensaje con la respuesta.


let edad= prompt("Ingrese su edad")
undefined
edad
"36"
//String//
undefined
edad= edad+1
"361"


Number("4")
4
// Pasa el String "4" a un número 4.
Number("4.5")
4.5

parseFloat("4.5$")
4.5

let mensaje =
<div>
    <p>¡Hola!</p>
</div>

console.log(mensaje)

`string ${variable u operación}`



// de la nueva forma
let nombre = 'Gabriela'
let saludo = `¡Hola, ${nombre}!`
console.log( saludo )
// ¡Hola, Gabriela!


let a = 5
let b = 6
let suma = `La suma es igual a ${a + b}`
console.log(suma)
// La suma es igual a 11


if (condición) {
    // Si la condición resulta verdadera, ejecuta este código.
    }

    if (condición) {
        // Si la condición es true, ejecuta este código.
        }
        else {
        // Sino, ejecuta este otro código (la condición es false).
        }


        let temperatura = prompt("Ingrese su temperatura.")
        if (temperatura < 37.5) { alert("Prioridad baja") } else { alert("Prioridad alta") }       



//
let edad=prompt("Ingrese su edad.")
if(edad<18) {
alert("No puede pasar al bar.")
}
else if(edad<21){
alert("Puede pasar al bar, pero no puede tomar alcohol.")
}
else{
alert("Puede pasar al bar y tomar alcohol.")
}

while(unaCondicion){
    //Ejecuta este código
    // Hace algo para que la condición eventualmente se deje de cumplir
    }

    let pasajero = 1
    while(pasajero <= 20){
    console.log("Puede pasar, su asiento es el: " + pasajero)
    pasajero++
    }    

let x=0
while(x < 10){
console.log(x)
}

let palabraMagica = "¡Ábrete, sésamo!"
let intento = prompt("Dígame, ¿cuál es la Palabra Mágica?")
while(intento != palabraMagica){
alert("Esa palabra es incorrecta")
intento = prompt("Inténtelo nuevamente")
}
alert("¡Bienvenido a La Caverna De Los 40 Ladrones!")

let i = 1
let final = 5
let acumulador = 0
while(i <= final){
acumulador += i
i++
}
console.log(acumulador)


let i = 1;
let j = 1;
let final = 5;
while (i <= final) {
j = 1;
while (j <= final) {
console.log(i + " - " + j);
j++;
}
i++;
}

1 - 1
1 - 2
1 - 3
1 - 4
1 - 5

2 - 1
2 - 2
2 - 3
2 - 4
2 - 5

3 - 1
3 - 2
3 - 3
3 - 4
3 - 5

