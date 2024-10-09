function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 3) {
                img.setAttribute('src', 'img/bebe-m.jpg')
            } else if (idade > 3 && idade < 14) {

                img.setAttribute('src', 'img/crianca-m.jpg')
            } else if (idade > 14 && idade < 24) {
                // adolescente
                img.setAttribute('src', 'img/jovem-m.jpg')
            } else if (idade >= 24 && idade < 50) {
                // adulto
                img.setAttribute('src', 'img/adulto-m.jpg')
            } else if (idade >=50) {
                // idoso
                img.setAttribute('src', 'img/idoso-m.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 3) {
                img.setAttribute('src', 'img/bebe-f.jpg')
            } else if (idade > 3 && idade < 14) {

                img.setAttribute('src', 'img/crianca-f.jpg')
            } else if (idade > 14 && idade < 24) {
                // adolescente
                img.setAttribute('src', 'img/jovem-f.jpg')
            } else if (idade >= 24 && idade < 50) {
                // adulto
                img.setAttribute('src', 'img/adulto-f.jpg')
            } else if (idade >=50) {
                // idoso
                img.setAttribute('src', 'img/idosa-f.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}