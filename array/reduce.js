"use strict";
const produtos = [
    { nome: 'Cafe', preco: 10.99 },
    { nome: 'Chocolcate', preco: 15.99 },
    { nome: 'feijao', preco: 8.99 },
    { nome: 'batata', preco: 4.99 },
    { nome: 'arroz', preco: 10.99 },
    { nome: 'sal', preco: 2.99 },
    { nome: 'acucar', preco: 5.99 },
    { nome: 'biscoito', preco: 7.59 },
    { nome: 'papel higienico', preco: 2.55 },
];
const total = produtos.reduce((acomulado, produto) => acomulado + produto.preco, 0);
console.log(total);
//# sourceMappingURL=reduce.js.map