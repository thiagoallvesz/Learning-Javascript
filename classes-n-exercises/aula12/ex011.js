var idade = 46
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log(`Com ${idade} anos você não vota!`)
} else if (idade < 18 || idade > 65) {
        console.log(`Com ${idade} anos o seu voto é opicional!`)
} else {
    console.log(`Com ${idade} anos o seu voto é obrigatório!`)
}
