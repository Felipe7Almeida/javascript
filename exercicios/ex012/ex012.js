var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora}Hrs.`)
if (hora > 4 && hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 19) {
    console.log('Boa tarde!')
} else if (hora >= 1 && hora < 5) {
    console.log('Boa madrugada!')
} else {
    console.log('Boa noite!')
}