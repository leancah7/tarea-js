function esPalindromo(texto) {
    var limpio = texto.toLowerCase().replace(/ /g, '')
  
    var invertido = limpio.split('').reverse().join('')
  
    if (limpio == invertido) {
      console.log("Es palíndromo")
    } else {
      console.log("No es palíndromo")
    }
  }
  
  esPalindromo("neuquen")