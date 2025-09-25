const myFavoriteGame: string = "Minecraft"
const varia:undefined = undefined
const Myvar:null = null

// NaN, infinity
// any passa tudo, mas not recomendado. Tenter não usar.

function minus_prime(a : number, b : number): number{
    
    return a - b
    
}

console.log(minus_prime(12, 2))

function estouMaluco(nome: string, agidade?: number){
    if (agidade){
        console.log(`Seu nome é: Undefined (mentira): ${nome} e sua idade é NaN, mentira de novo: ${agidade}`)
    }
    else{
        console.log(`Seu nome é ${nome}`)
    }
}

estouMaluco("Kenzo")

//doideira

estouMaluco("PeidoLucasDasODS", 22)