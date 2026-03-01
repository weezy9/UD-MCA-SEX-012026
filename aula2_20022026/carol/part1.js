// Parte 1 - Array simples

let materias = [
  "Matemática", "Português", "História", "Geografia", "Biologia",
  "Física", "Química", "Inglês", "Artes", "Sociologia",
  "Filosofia", "Educação Física", "Programação", "Banco de Dados",
  "Redes", "Algoritmos", "Estrutura de Dados", "UX", "IA", "Cloud"
];

// A
console.log(materias[0]);
console.log(materias[7]);
console.log(materias[11]);
console.log(materias[15]);
console.log(materias[18]);
console.log(materias[20]); // não existe

// B
console.log("Penúltima:", materias[materias.length - 2]);
console.log("Última:", materias[materias.length - 1]);

// C
console.log("Quantidade:", materias.length);

// D
materias.push("DevOps");

// E
for (let materia of materias) {
  console.log("Matéria:", materia);
}