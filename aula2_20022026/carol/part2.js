// Parte 2 - Objeto

let camisa = {
  nome: "Camisa Polo",
  cor: "Azul",
  preco: 120,
  estoque: 35
};

// A
console.log(camisa.nome);

// B
console.log(camisa["preco"]);

// C
camisa.estoque = 80;

// D
Object.keys(camisa).forEach(function(chave) {
  console.log(chave + ":", camisa[chave]);
});