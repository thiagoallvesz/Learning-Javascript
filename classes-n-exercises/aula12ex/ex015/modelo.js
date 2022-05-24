// Inicio da função

function verificar() {
    // Pegando os dados do computador
    var data = new Date()
    var ano = data.getFullYear()

    // Fazendo a ligação com os elementos HTML
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    // Regra e condição - Lógica de programação
    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var formSexo = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''

        // Criando um elemento no HTML por JS
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formSexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'img/bebe-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/idoso-m.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'img/bebe-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/idoso-f.png')
            }
        }

        // Exibindo as respostas em tela
        res.style.textAlign = 'center'
        res.innerHTML = `<P>Detectamos <strong>${genero}</strong> com <strong>${idade} anos.</strong></p>`

        // Exibindo na tela o conteúdo do elemento criado por JS
        res.appendChild(img)
    }
}