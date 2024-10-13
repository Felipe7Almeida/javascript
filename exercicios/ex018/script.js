function contar() {
    let ini = document.getElementById('inicio')   
    let fim = document.getElementById('fim')
    let pass= document.getElementById('passos')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        res.innerHTML = `Impossivel fazer contagem`
        //alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449} `
            }
        }
        res.innerHTML += ` \u{1f3c1}`
    }
}