function converter() {
    // Obtém o valor de entrada do elemento HTML
    var entrada = document.getElementById('numero').value
    var res = document.getElementById('resultado')

    if (entrada === '') {
    // Verifica se o campo de entrada está vazio
        window.alert('Digite um número romano ou arábico válido!')
        return
    }
    entrada = entrada.toUpperCase()
    if (NumeroRomano(entrada)) { 
    // Verifica se a entrada é um número romano válido
        var arabico = RomanoArabico(entrada.toUpperCase()) // Converte o número romano para arábico
        if (arabico !== -1) {
            res.textContent = 'Número arábico correspondente: ' + arabico
        } 
    } else if (NumeroArabico(entrada)) {
        var romano = ArabicoRomano(parseInt(entrada)) // Converte o número arábico para romano
        if( romano !== '') {
            res.textContent = 'Número romano correspondente: ' + romano
        } else {
            window.alert('Número arábico inválido!')
        }
    } else {
        window.alert('Digite um número arábico válido! Este conversor vai de 1 até 3999.') 
    }
} 
function NumeroRomano(num) {
// Verifica se a entrada corresponde ao padrão de um número romano válido
    var numRomano = /^(M|CM|D|CD|C|XC|L|XL|X|IX|V|IV|I)+$/
    return numRomano.test(num) // Verifica se a entrada corresponde ao padrão de um número romano válido
}
function NumeroArabico(num) {
    var numArabico = /^[1-9][0-9]*$/
    return numArabico.test(num) // Verifica se a entrada corresponde ao padrão de um número arábico válido
}
function RomanoArabico(numeroromano) {
// Mapeia cada caractere romano a um valor arábico correspondente
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
    // Obtém o caractere romano atual
        var caractereatual = numeroromano[i]
    // Obtém o valor arábico correspondente ao caractere atual
        var valorcaractereAtual = letras[caractereatual]
    // Obtém o próximo caractere romano( se houver )
        var proxCaractere = numeroromano[i + 1]
    // Obtém o valor arábico correspondente ao próximo caractere( se houver )
        var valorproxCaractere = letras[proxCaractere]

        if (proxCaractere && valorproxCaractere > valorcaractereAtual) {
            if (valorproxCaractere / valorcaractereAtual === 10 || valorproxCaractere / valorcaractereAtual === 5) {
                // Realiza a subtração se o próximo caractere for maior que o atual
                arabico += valorproxCaractere - valorcaractereAtual
                i++
            } else {
                return -1
            }
        } else {
            arabico += valorcaractereAtual
        }
    }
    return arabico
}
function ArabicoRomano(numeroArabico) {
    if (numeroArabico < 0 || numeroArabico >=4000) {
        return window.alert('Este conversor vai de 1 até 3999.')
    }
// Mapeia cada valor arábico a um caractere romano correspondente
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
        while(numeroArabico >= numeros[i].arabic) {
    // Verifica se o número arábico atual é maior ou igual ao valor arábico correspondente
            romano += numeros[i].roman
            numeroArabico -= numeros[i].arabic
        }
      }
      return romano
}