var nota = Number(
  prompt("Digite a sua nota final, para saber se foi aprovado!")
);

if (nota >= 7 && nota <= 10) {
  alert("Parabéns, voce foi aprovado!");
} else if (nota >= 5 && nota <= 6) {
  alert("Infelizmente o aluno terá que cumprir recuperação");
} else if (nota >= 0 && nota <= 4) {
  alert("Infelizmente o aluno reprovou ");
} else {
  alert("Nota inválida");
}
