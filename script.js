/* agregar comentario: alt + shift + a */
/* comentario de bloque */
// comentario de linea

console.log("hola mundo")
console.log("aqui podemos escribir cualquier cosa")
console.log("adios")
console.log("no hay autocompletado")
console.log(12345)
console.log(-1,2345)

// ---------Tipos de datos---------

/* ---------declarar una variable--------- */
let nombre = "dayro"
console.log(nombre)
monbre = "juan"
console.log(nombre)

/* ---------declarar una constante--------- */
const pi = 3.1416
console.log(pi)
/* pi = 3 no se puede sobreescribir en una constante */

/* javascrip antiguo */
var apellido = "arias"

const numero1 = 7
const numero2 = 9
const resultado = numero1 + numero2
console.log("resultado:", resultado, "algo")

// ---------tipos de datos---------
// ---------strings - texto---------
const ciudad = "bogota"
const pais1 = "colombia"
const pais2 = " argentina" 
console.log(ciudad, pais1, pais2)

// ---------lueguaje debilmente tipado--------- 
// int, float - numeros 
const suma = 5
const edad = 20.5
const numeroNegativo = "-10"
console.log("multiplicacion:", 5 * "5")
console.log(suma, edad, numeroNegativo)

// Booleandos - bool - verdadero o falso
let esVerde = true
let esMorado = false

// ---------Estructuras de Datos-----------

//Array - Vectores - Listas
let listaDeNumeros = [20, -55, 100]
console.log(listaDeNumeros)

// ver un elemento de la lista
console.log(listaDeNumeros[0])
console.log(listaDeNumeros[1])
console.log(listaDeNumeros[2])


let listaCiudades = [
    "bogotá",
    "medellin", 
    "medellin", 
    "cali"
]

console.log(listaCiudades)

let listaDeListas = 
[listaDeNumeros, listaCiudades]
console.log(listaDeListas)

// ----------------acceder al  dato "medellin"------------
console.log(listaDeListas[1][1])

// ----------------JSON (javaScript Objet Notation) - Objetos
// ----------------clave valor
let usuario = {nombre: "dayro",
 edad: 35,
 ciudad: "bogotá",
 ubicación: {
    latitud:1.53565656,
    longitud:-2.3486545
 },
 amigos: ["andres", "pepito"]
}

console.log(usuario)
console.log(usuario.nombre)
console.log(usuario.ubicación.latitud)

usuario.edad = 25
console.log(usuario)

//-------------tipos de datos vacios --------
//--null - nulo-

let espacioVacio = null

//------undefined - indefinido------
let noDefinido = undefined
console.log(usuario.apellido)

//------ NaN -not a Number - no es un numero------
const noEsNumero = NaN
const multiplicacion = 10 * "hola"
console.log(multiplicacion)

// -------estructuras de control --------

// Bucles - un proceso que se repite
// loop - blucle infinito

const listaAnimales = [
    "perro",
    "gato",
    "oso",
    "gallina",
    "lobo",
    "zorro"
]

console.log("tamaño del array", listaAnimales.length)

//parametro 1: contador
//parametro 2: condición para que se detenga
//parametro 3: comportamiento del contador
//for(let contador = 0; contador < listaAnimales.length; contador = contador + 1) {console.log(contador)

for(let contador = 0; i < listaAnimales.length; i++) {
    console.log(i)
    console.log(listaAnimales[i])
}

//condiciones
// - igualdad: ===
// - menor que: <
// - mayor que: >
// - menor a igual que: <=
// - mayor o igual que: >=
















