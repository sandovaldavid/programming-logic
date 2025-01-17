alert("¡Bienvenida y bienvenido a nuestro sitio web!")
let nombre = "Lua"
let edad = 25
let numeroDeVentas = 50
let saldoDisponible = 1000
alert('¡Error! Preencha todos los campos');
let mensajeDeError = "¡Error! Completa todos los campos"
alert(mensajeDeError)

nombre = prompt("Por favor, ingresá tu nombre")
edad = prompt("Por favor, ingresá tu edad")

if (edad >= 18) {
    alert("¡Puedes obtener tu licencia de conducir!")
}