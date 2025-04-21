function infotexto(texto) {
    if (texto == texto.toUpperCase()) {
      console.log("Solo mayúsculas")
    }
    else if (texto == texto.toLowerCase()) {
      console.log("Solo minúsculas")
    }

    else {
      console.log("Mezcla de mayúsculas y minúsculas")
    }
  }
  
  infotexto("hola")