class Data {
  // Público por padrão!
  dia: number;
  public mes: number;
  ano: number;

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data(25, 5, 1990);
aniversario.dia = 5;
console.log(aniversario.dia);
console.log(aniversario);

const casamento = new Data(); // Pode omitir os "()"
casamento.ano = 2022;
console.log(casamento);

class DataEsperta {
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970
  ) {}
}

const aniversarioEsperto = new DataEsperta(25, 5, 1990);
aniversarioEsperto.dia = 5;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);

const casamentoEsperto = new DataEsperta(); // Pode omitir os "()"
casamentoEsperto.ano = 2022;
console.log(casamentoEsperto);
