"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
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
//# sourceMappingURL=classes.js.map