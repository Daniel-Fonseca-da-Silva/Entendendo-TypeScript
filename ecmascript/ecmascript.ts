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
