var idioma = prompt("Por favor, digite o código do IDIOMA.");
var variacao = prompt("Por favor, digite a variação do IDIOMA.");

if (idioma == "pt" && (variacao == "br" || variacao == "pt")) {
  alert("Olá");
} else if (idioma == "en" && variacao == "us") {
  alert("Hi");
} else if (idioma == "en" && variacao == "gb") {
  alert("Hello");
} else if (idioma == "fr") {
  alert("Salut");
} else if (idioma == "es") {
  alert("Hola");
} else {
  alert("Código do idioma não reconhecido");
}
