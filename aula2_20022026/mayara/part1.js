//PARTE 1-ARRAY SIMPLES
let cantores = [
  'Sabrina Carpenter', 'Ariana Grande', 'Beyonce', 'Rihanna', 'Justin Bieber',
  'Duquesa', 'Budah', 'Travis Scott', 'Veigh', 'The Weeknd',
  'Sabotagem', 'Anitta', 'Marina Sena', 'Kayblack', 'Yunk Vino',
  'MC Hariel', 'Mc Luanna', 'Mc Cabelinho', 'Dj Guuga', 'Doja Cat'
];

// A Elementos nas posições específicas
console.log("Posição 0:", cantores[0]);
console.log("Posição 7:", cantores[7]);
console.log("Posição 11:", cantores[11]);
console.log("Posição 15:", cantores[15]);
console.log("Posição 18:", cantores[18]);
console.log("Posição 20:", cantores[20]); // será undefined

// B Penúltimo e último elementos
console.log("Penúltima:", cantores[cantores.length - 2]);
console.log("Última:", cantores[cantores.length - 1]);

// C Quantidade de elementos
console.log("Quantidade:", cantores.length);

// D Adicionar um novo cantor
cantores.push("Lady Gaga");
console.log("Novo Array:", cantores);   

// E Imprimir cada cantor usando um loop
for (let i = 0; i < cantores.length; i++) {
  console.log("Cantor:", cantores   [i]);
}
