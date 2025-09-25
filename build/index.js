"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showInfo(date) {
    console.log(date.toLocaleDateString());
    console.log(`Dia: ${date.getDate()} | Mês: ${date.getMonth() + 1} | Ano: ${date.getFullYear()}`);
}
showInfo(new Date("2025-10-12"));