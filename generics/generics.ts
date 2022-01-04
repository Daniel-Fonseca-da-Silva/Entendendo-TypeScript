function echo(objeto: any) {
  return objeto;
}

console.log(echo("Nikolai").length);
console.log(echo(27).length);
console.log(echo({ nome: "Nikolai", idade: 20 }));

// Usando generics
function echoMelhorado<T>(objeto: T): T {
  return objeto;
}

console.log(echoMelhorado("Nikolai").length);
console.log(echoMelhorado<number>(27));
console.log(echoMelhorado({ nome: "Nikolai", idade: 20 }));

// Generics disponíveis na API
const avaliacoes: Array<number> = [10, 9.5, 4.5];
avaliacoes.push(8.4);
// avaliacoes.push('3.5');
console.log(avaliacoes);
