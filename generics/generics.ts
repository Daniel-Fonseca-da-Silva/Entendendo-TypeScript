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

// Array
function imprimir<T>(args: T[]) {
  args.forEach((elemento) => console.log(elemento));
}

imprimir([5, 3, 8, 12]);
imprimir<number>([6, 18, 24, 32]);
imprimir<string>(["3", "6", "12", "24"]);
imprimir<{ nome: string; peso: number }>([
  { nome: "Nikolai", peso: 80 },
  { nome: "Gasparine", peso: 95 },
  { nome: "Josh", peso: 75 },
]);

type funcionarios = { nome: string; peso: number };
imprimir<funcionarios>([
  { nome: "Nikolai", peso: 80 },
  { nome: "Gasparine", peso: 95 },
  { nome: "Josh", peso: 75 },
]);

// Tipo Genérico
type echo = <T>(data: T) => T;
const chamarEcho: echo = echoMelhorado;
console.log(chamarEcho<string>("Alguma coisa"));

// classe com generics
abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T, public operando2: T) {}

  abstract executar(): R;
}

// console.log(new OperacaoBinaria("Bom ", "dia").executar());
// console.log(new OperacaoBinaria(3, 9).executar());
// console.log(new OperacaoBinaria(3, 9).executar());
// console.log(new OperacaoBinaria("17", "28").executar());
// console.log(new OperacaoBinaria({}, null).executar());

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2;
  }
}

console.log(new SomaBinaria(25, 25).executar());

class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
  getTime(data: Data): number {
    let { dia, mes, ano } = data;
    return new Date(`${mes}/${dia}/${ano}`).getTime();
  }

  executar(): string {
    const t1 = this.getTime(this.operando1);
    const t2 = this.getTime(this.operando2);
    const diferenca = Math.abs(t1 - t2);
    // Um dia em milissegundos
    const dia = 1000 * 60 * 24;
    return `${Math.ceil(diferenca / dia)} dia(s)`;
  }
}

const d1 = new Data(1, 2, 2022);
const d2 = new Data(5, 2, 2022);
console.log(new DiferencaEntreDatas(d1, d2).executar());
