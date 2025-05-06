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
         img.setAttribute('src', 'foto-menino.png')
      } else if (idade < 21) {
         img.setAttribute('src', 'foto-jovem.png')
      } else if (idade < 59) {
         img.setAttribute('src', 'foto-homem-h.png')
      } else {
         img.setAttribute('src', 'foto-idoso-h.png')
      }
    } else if (fsex[1].checked) {
      gênero = 'Mulher'
      if (idade >=0 && idade < 12) {
         img.setAttribute('src', 'foto-menina.png')
      } else if (idade < 21) {
         img.setAttribute('src', 'foto-jovem-menina.png')
      } else if (idade < 59) {
         img.setAttribute('src', 'foto-mulher-m.png')
      } else {
         img.setAttribute('src', 'foto-idosa-m.png')
      }
    }
    res.style.textAlign = 'center' 
    img.style.display = 'block'    // faz a imagem se comportar como um bloco
    img.style.margin = '10px auto'
    res.innerHTML =  `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
   }
}
