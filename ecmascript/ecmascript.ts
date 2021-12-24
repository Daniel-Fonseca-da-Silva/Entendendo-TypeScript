// Let & Const
let seraQuePode = "?"; // Hoisting
console.log(seraQuePode);

let estaFrio = true;
if (estaFrio) {
  let acao = "Colocar um casaco";
  console.log(acao);
}

const cpf: string = "000.000.000-00";
// cpf = "111.111.111-11";
console.log(cpf);

var segredo = "Externo";

function revelar() {
  const segredo = "Interno";
  console.log(segredo);
}
revelar();
console.log(segredo);

{
  {
    const def = "def";
    console.log(def);
  }
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}
// console.log(i);

// Arrow Function
const somar = function (n1: number, n2: number): number {
  return n1 + n2;
};

console.log(somar(3, 5));
console.log(somar(2, 50));

/*
Arrow function
  remova palavra function
  subtistua '{}' chaves e return por '=>' flecha
*/
// const subtrair = function (n1: number, n2: number) { n1 - n2 };
const subtrair = (n1: number, n2: number) => n1 - n2; 
console.log(subtrair(10, 5));
const somarArrow = (val1: number, val2: number) => val1 + val2;
console.log(somarArrow(25, 25));

