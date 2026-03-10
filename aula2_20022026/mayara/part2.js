//PARTE2-OBJETO

let flores = {
  nome: 'lirio',
  cor: 'amarelo',
  preco: 200,
  estoque: 50
};

// A. Acessar nome do objeto
console.log("Nome:", flores.nome);

// B. Acessar preço com colchetes
console.log("Preço:", flores['preco']);

// C. Atualizar estoque para 80
flores.estoque = 80;
console.log("Novo estoque:", flores.estoque)

// D. Imprimir todas propriedades
for (let chave in flores) {
  console.log(chave + ":", flores[chave]);
}
