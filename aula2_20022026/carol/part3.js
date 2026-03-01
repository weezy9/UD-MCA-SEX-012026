// Parte 3 - Array de Objetos

let supermercado = [
  { nome: "Arroz", preco: 25, estoque: 90 },
  { nome: "Feijão", preco: 8, estoque: 70 },
  { nome: "Macarrão", preco: 6, estoque: 60 },
  { nome: "Óleo", preco: 10, estoque: 50 },
  { nome: "Açúcar", preco: 5, estoque: 80 },
  { nome: "Café", preco: 18, estoque: 40 },
  { nome: "Leite", preco: 4, estoque: 100 },
  { nome: "Biscoito", preco: 3, estoque: 65 },
  { nome: "Farinha", preco: 7, estoque: 55 },
  { nome: "Manteiga", preco: 14, estoque: 30 }
];

// A
console.log("Preço do segundo item:", supermercado[1].preco);

// B
console.log("Nome do terceiro item:", supermercado[2].nome);

// C
console.log("Quantidade de itens:", supermercado.length);

// D
supermercado.forEach(item => {
  console.log("Item:", item.nome);
});

// E
let total = 0;
supermercado.forEach(item => {
  total += item.estoque;
});
console.log("Total em estoque:", total);

// F
let maior = supermercado.reduce((acumulador, atual) => {
  return atual.estoque > acumulador.estoque ? atual : acumulador;
});

console.log("Item com maior estoque:", maior);