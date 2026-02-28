// PARTE 3 - Array de Objetos

let itens = [
  { nome: "Mouse", preco: 80, estoque: 15 },
  { nome: "Teclado", preco: 120, estoque: 10 },
  { nome: "Monitor", preco: 950, estoque: 8 },
  { nome: "Headset", preco: 200, estoque: 20 },
  { nome: "Webcam", preco: 150, estoque: 12 },
  { nome: "Notebook", preco: 3500, estoque: 5 },
  { nome: "Tablet", preco: 1800, estoque: 9 },
  { nome: "Impressora", preco: 700, estoque: 6 },
  { nome: "HD Externo", preco: 400, estoque: 18 },
  { nome: "Pendrive", preco: 50, estoque: 30 }
];

// A
console.log("Preço do segundo:", itens[1].preco);

// B
console.log("Nome do terceiro:", itens[2].nome);

// C
console.log("Quantidade de itens:", itens.length);

// D
for (let i = 0; i < itens.length; i++) {
  console.log("Produto:", itens[i].nome);
}

// E
let totalEstoque = 0;
for (let i = 0; i < itens.length; i++) {
  totalEstoque += itens[i].estoque;
}
console.log("Total de estoque:", totalEstoque);

// F
let maior = itens[0];

for (let i = 1; i < itens.length; i++) {
  if (itens[i].estoque > maior.estoque) {
    maior = itens[i];
  }
}

console.log("Maior estoque:", maior);