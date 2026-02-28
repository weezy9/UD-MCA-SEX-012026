// PARTE 1 - Array Simples

let linguagens = [
  "Java", "Python", "JavaScript", "C#", "PHP",
  "Kotlin", "Swift", "Go", "Ruby", "TypeScript",
  "C", "C++", "CSS", "HTML", "Angular",
  "React", "Groovy", "R", "Scala", "Elixir"
];

// A  
console.log("Posição 0:", linguagens[0]);
console.log("Posição 7:", linguagens[7]);
console.log("Posição 11:", linguagens[11]);
console.log("Posição 15:", linguagens[15]);
console.log("Posição 18:", linguagens[18]);
console.log("Posição 20:", linguagens[20]); // Não existe, retorna undefined

// B
console.log("Penúltima:", linguagens[linguagens.length - 2]);
console.log("Última:", linguagens[linguagens.length - 1]);

// C
console.log("Quantidade:", linguagens.length);

// D
linguagens.push("Haskell");

// E
for (let i = 0; i < linguagens.length; i++) {
  console.log("Linguagem:", linguagens[i]);
} 