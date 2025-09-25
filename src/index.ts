function showInfo(date: Date){
    console.log(date.toLocaleDateString())
    console.log(`Dia: ${date.getDate()} | Mês: ${date.getMonth()+1} | Ano: ${date.getFullYear()}`)
}

showInfo(new Date("2025-10-12"))

// testando updates do TS pro JS
console.log("Dattebayooooo!")
