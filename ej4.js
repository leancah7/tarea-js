var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
var numeroDni = 12345678
var letraDni = 'Z'

if (numeroDni < 0 || numeroDni > 99999999) {
  console.log("El número proporcionado no es válido")
} else {
  var resto = numeroDni % 23
  var letraCalculada = letras[resto]

  if (letraCalculada != letraDni) {
    console.log("La letra no es correcta")
  } else {
    console.log("El número y la letra son correctos")
  }
}