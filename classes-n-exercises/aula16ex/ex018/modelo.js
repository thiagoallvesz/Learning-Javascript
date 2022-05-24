//Ligando o js com os elementos HTML

let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


//Função que analisa se o valor digitado é um número entre 0 e 100

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

//Função que analisa se o valor está ou não na lista do array

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

// Função que adiciona os valores na lista / array
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        //adicionando valores no select e mostrando resultado visual no site
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        lista.appendChild(item)
        //reseta os resultados visuais no site após adicionar um novo valor
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista!')
    }

    //reseta o input e dá foco
    num.value = ''
    num.focus()
}


//função que finazila o programa e mostra todos os resultados

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione algum valor antes de finalizar!')
    } else {
        //quantidade de valores digitados
        let tot = valores.length
        //analizar quais números são maiores e menores
        let maior = valores[0]
        let menor = valores[0]
        //fazendo a soma e a média de todos os valores
        let soma = 0
        let media = 0
        //laço de percurso que varre o valor inteiro do array
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        //calculando a médoa
        media = soma / tot

        //mostrando os resultados visuais no site
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}