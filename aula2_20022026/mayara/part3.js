// PARTE 3 - ARRAY DE OBJETOS

let penteadeira = [
  { nome: 'Base', preco: 100, estoque: 30 },
  { nome: 'Corretivo', preco: 50, estoque: 45 },
  { nome: 'Hidratante', preco: 900, estoque: 20 },
  { nome: 'Pincel', preco: 200, estoque: 35 },
  { nome: 'Batom', preco: 150, estoque: 25 },
  { nome: 'Serum', preco: 3500, estoque: 10 },
  { nome: 'Sombra', preco: 1200, estoque: 15 },
  { nome: 'Gloss', preco: 2500, estoque: 40 },
  { nome: 'Perfume', preco: 800, estoque: 12 },
  { nome: 'Body Splash', preco: 300, estoque: 28 }
];

// A. Preço do segundo objeto
console.log("Preço do segundo:", penteadeira[1].preco);

// B. Nome do terceiro objeto
console.log("Nome do terceiro:", penteadeira[2].nome);

// C. Quantidade de itens
console.log("Quantidade de produtos:", penteadeira.length);

// D. Imprimir nome de todos
for (let i = 0; i < penteadeira.length; i++) {
  console.log("Produto:", penteadeira[i].nome);
}

// E. Somar estoque total
let totalEstoque = 0;
for (let i = 0; i < penteadeira.length; i++) {
  totalEstoque += penteadeira[i].estoque;
}
console.log("Total de estoque:", totalEstoque);

// F. Objeto com maior estoque
let maiorEstoque = penteadeira[0];

for (let i = 1; i < penteadeira.length; i++) {
  if (penteadeira[i].estoque > maiorEstoque.estoque) {
    maiorEstoque = penteadeira[i];
  }
}

console.log("Produto com maior estoque:", maiorEstoque);