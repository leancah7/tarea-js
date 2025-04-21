var valores = [true, 5, false, "hola", "adios", 2]

var hola = valores[3]
var adios = valores[4]

if (hola.length > adios.length) {
  console.log("Hola es mayor que adios")
} else {
  console.log("Adios es mayor que hola")
}

var True = valores[0]
var False = valores[2]

if (True || False) {
  console.log("Verdadero")
} else if (True && False) {   
  console.log("Falso")
}

var cinco = parseInt(valores[1])
var dos = parseInt(valores[5])

var suma = cinco + dos
var resta = cinco - dos
var multiplicacion = cinco * dos
var division = cinco / dos
var porcentaje = cinco % dos

console.log("Suma: " + suma)
console.log("Resta: " + resta)
console.log("Multiplicación: " + multiplicacion)
console.log("División: " + division)
console.log("Porcentaje: " + porcentaje)