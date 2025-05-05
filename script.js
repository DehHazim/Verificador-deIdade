function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res') // poderia ser o usado o getElementById
   if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
   } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      gênero = 'Homem'
      if (idade >=0 && idade < 12) {
         img.setAttribute('src', 'foto-bebe-h.png')
      } else if (idade < 21) {
         img.setAttribute('src', 'foto-jovem-h.png')
      } else if (idade < 59) {
         img.setAttribute('src', 'foto-homem.png')
      } else {
         img.setAttribute('src', 'foto-idoso.png')
      }
    } else if (fsex[1].checked) {
      gênero = 'Mulher'
      if (idade >=0 && idade < 12) {
         img.setAttribute('src', 'foto-bebe-m.png')
      } else if (idade < 21) {
         img.setAttribute('src', 'foto-jovem-m.png')
      } else if (idade < 59) {
         img.setAttribute('src', 'foto-mulher.png')
      } else {
         img.setAttribute('src', 'foto-idosa.png')
      }
    }
    res.textAlign = 'center' 
    res.innerHTML =  `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
   }
}
