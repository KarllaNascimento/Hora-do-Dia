function carregar (){
let msg = document.getElementById("msg")
let img = document.getElementById("imagem")
let data = new Date()
let hora = data.getHours()
msg.innerHTML = `Olá! Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
   img.src = "manha.png"
   document.body.style.background = "#ce7d33"
} else if (hora >= 12 && hora < 18){
   img.src = "tarde.png"
   document.body.style.background = "#edc73d"
}  else{
   img.scr = "anoite.png"
   document.body.style.background = "#193d50"
}
}
