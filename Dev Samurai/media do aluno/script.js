var nota1 = Number(prompt("Digite a primeira nota"));
var nota2 = Number(prompt("Digite a segunda nota"));
var nota3 = Number(prompt("Digite a terceira nota"));

var resultado = (nota1 + nota2 + nota3) / 3;

alert("Media:" + resultado);

if (resultado >= 7) {
  alert("Aluno aprovado");
} else if (resultado >= 5) {
  alert("Aluno em recuperação");
} else {
  alert("Aluno reprovado");
}
