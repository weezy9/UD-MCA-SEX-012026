// PARTE 2 - Objeto

let celular = {
  nome: "Galaxy S23",
  cor: "Preto",
  preco: 4200,
  estoque: 25
};

// A
console.log("Nome:", celular.nome);

// B
console.log("Preço:", celular["preco"]);

// C
celular.estoque = 80;

// D
for (let propriedade in celular) {
  console.log(propriedade + ":", celular[propriedade]);
}