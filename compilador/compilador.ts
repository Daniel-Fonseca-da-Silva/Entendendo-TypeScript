let canal: string = "Gaveta";
let inscritos: number = 65012;
// canal = inscritos;
console.log(`canal = ${canal}`);

// let nome: string = 'Erick';

function soma(a: any, b: any) {
  return a + b;
}

let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = "abc";

function saudar(isManha: boolean): string {
  let saudacao: string;
  if (isManha) {
    saudacao = "Bom dia!";
  } else {
    saudacao = "Ok!";
  }
  return saudacao;
}
