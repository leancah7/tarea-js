var resultados = Array(13).fill(0);
for (var i = 0; i < 36000; i++) {
    var dado1 = Math.floor(Math.random() * 6) + 1;
  var dado2 = Math.floor(Math.random() * 6) + 1;
  var suma = dado1 + dado2;
  resultados[suma]++;
}
for (var j = 2; j <= 12; j++) {   
  console.log("Suma " + j + ": " + resultados[j]);
}