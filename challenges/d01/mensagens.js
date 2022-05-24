/* function botao1() {
    alert('Você clicou no 1° botão!')
}

function botao2() {
    alert('Você clicou no 2° botão!')
}

function botao3() {
    alert('Você clicou no 3° botão!')
} */

let botao1 = document.getElementById('bot1')
let botao2 = document.getElementById('bot2')
let botao3 = document.getElementById('bot3')

botao1.addEventListener('click', clica1)
botao2.addEventListener('click', clica2)
botao3.addEventListener('click', clica3)

function clica1() {
    if (botao1.click) {
        alert('Você clicou no 1° botao!')
    }
}

function clica2() {
    if (botao2.click) {
        alert('Você clicou no 2° botão!')
    }
}

function clica3() {
    if (botao3.click) {
        alert('Você clicou no 3° botão!')
    }
}