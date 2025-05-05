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
    res.innerHTML = `idade calculada: ${idade}`
      }

}
