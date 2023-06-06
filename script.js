function converter() {
    var num = document.getElementById('numero').value
    var res = document.getElementById('resultado')
    if (num === '') {
        res.textContent = 'Digite um número romano ou arábico'
        return
    }
    if (NumeroRomano(num)) {
        res.textContent = 'Número arábico correspondente: ' + RomanoArabico(num.toUpperCase())
    } else {
        res.textContent = 'Número romano correspondente: ' + ArabicoRomano(num)
    }
}
function NumeroRomano(num) {
    var numromano = /^(M|CM|D|CD|C|XC|L|XL|X|IX|V|IV|I)+$/
    return numromano.test(num)
}
function RomanoArabico()