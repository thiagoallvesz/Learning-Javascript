function contar() {

    // Ligação com os elementos HTML

    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    // Validação se nenhum dos campos estão vazios

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar! Digite um valor para o PASSO'
        //alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br><br>'

        // Manupulando os valores dos inputs

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {

            // Contagem progressiva...

            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` \u{1F449} ${c} `
            }
        } else {

            //Contagem regressiva...

            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` \u{1F449} ${c} `
            }
        }
        res.innerHTML += ` \u{1F3C1} `
    }
}