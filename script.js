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
function RomanoArabico(numeroromano) {
    var letras = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    }
    var arabico = 0
    for ( var i = 0; i < numeroromano.length; i++) {
        var numeroatual = numeroromano[i]
        var numatualvalor = letras[numeroatual]
        var proxnumero = numeroromano[i + 1]
        var proxnumerovalor = letras[proxnumero]

        if (proxnumero && proxnumerovalor > numatualvalor) {
        arabico += proxnumerovalor - numatualvalor
            i++
        } else {
        arabico += numatualvalor
        }
    }
    return arabico
}
function ArabicoRomano(numeroarabico) {
    var numeros = [
        { arabic: 1000, roman: 'M' },
        { arabic: 900, roman: 'CM' },
        { arabic: 500, roman: 'D' },
        { arabic: 400, roman: 'CD' },
        { arabic: 100, roman: 'C' },
        { arabic: 90, roman: 'XC' },
        { arabic: 50, roman: 'L' },
        { arabic: 40, roman: 'XL' },
        { arabic: 10, roman: 'X' },
        { arabic: 9, roman: 'IX' },
        { arabic: 5, roman: 'V' },
        { arabic: 4, roman: 'IV' },
        { arabic: 1, roman: 'I' }
      ]
      var romano = ''

      for ( var i = 0; i < numeros.length; i++) {
        while(numeroarabico >= numeros[i].arabic) {
            romano += numeros[i].roman
            numeroarabico -= numeros[i].arabic
        }
      }
      return romano
}