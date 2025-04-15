function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res') // poderia ser igual a opção de cima também
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 12) {
                // Criança
            } else if (idade < 21 ) {
                // Jovem
               img.setAttribute('src', '')
            } else if (idade < 60) {
                // Adulto
            } else {
                // Idoso
            }

        } else {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                // Criança
            } else if (idade < 21 ) {
               // Jovem
            } else if (idade < 60) {
                // Adulto
            } else {
                // Idoso
            }
        }
        res.innerHTML = `Detectamos: ${gênero} com ${idade} anos` // Para interpolação se usa crase e não aspas simples
    }
}
