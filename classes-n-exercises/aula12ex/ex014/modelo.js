function carregar() {
    // Declaração de variáveis, ligações com os elementos HTML e pegando o horário do computador
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()

    //var hora = 18

    msg.innerHTML = `<p>Agora são <strong>${hora}</strong> horas</p>`

    // Condição para as mensagens e imagens serem exibidas no site

    if (hora >= 0 && hora < 12) { // entre 00h e 12h
        msg.innerHTML += '<p><strong>BOM DIA!</strong></p>'
        img.src = 'manha.png'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) { // entre 12h e 18h
        msg.innerHTML += '<p><strong>BOA TARDE!</strong></p>'
        img.src = 'tarde.png'
        document.body.style.backgroundColor = '#b9846f'
    } else { // entre 18 e 00h
        msg.innerHTML += '<p><strong>BOA NOITE!</strong></p>'
        img.src = 'noite.png'
        document.body.style.backgroundColor = '#515154'
    }
}

