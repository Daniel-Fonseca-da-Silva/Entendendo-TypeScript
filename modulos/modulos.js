"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { areaRetangulo } from "./retangulo";
// import { areaCircunferencia } from "./circunferencia";
const retangulo_1 = __importDefault(require("./retangulo"));
const circunferencia_1 = require("./circunferencia");
console.log("Modulos carregados com sucesso!");
console.log((0, retangulo_1.default)(7, 8));
console.log((0, circunferencia_1.areaCircunferencia)(16));
const { digaOi } = require("./novo");
console.log(digaOi("Nikolai"));
//# sourceMappingURL=modulos.js.map