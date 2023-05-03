
function resultado(){
    var km = window.document.getElementById("veloc");
    var n1 = window.document.querySelector("input#txtvel1");
    var cmpres = window.document.getElementById("rst");
    var vel = Number (n1.value)

    if(vel>60){
        alert("MULTADO!!!!!!")
        cmpres.style.background = "Red"
        cmpres.innerText = "\n MULTADO!!!! Voce ultrapassou o limite de velocidade da via" 
        km.innerHTML = " <center><Strong>KM/H<Strong><center>\n \n \n " + vel
        
    }
    else{
        cmpres.style.background = "Green"
        cmpres.innerText = 'CAIXA DE ALTUAÇÃO \n \n Velocidade abaixo do limete da Via'
        km.innerHTML =" <center><Strong>KM/H<Strong><center>\n \n \n " + vel
    }
   
}
