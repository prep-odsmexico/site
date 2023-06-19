// Add any custom javafuscript here.
//arreglo de usuarios y contraseñas
var usucontra=[
  {
    "usuario":"sandra.marquez",
    "contra": "bety"
  },
  {
    "usuario":"sergio.nieto",
    "contra":"jefe"
  }
]
//colores para el  mapa
var colors1 = [
  "#c4e1c6",
  "#b0d1b3",
  "#9bc2a1",
  "#87b28f",
  "#74a37c",
  "#60946b",
  "#4d8559",
  "#3a7747",
  "#276836"
];
function myMapColorFunction(indicatorId, goalId) {
  switch(parseInt(goalId)){
    case 1:
      return chroma.brewer.OrRd;
      break;
     case 2:
      return chroma.brewer.OrRd;
      break;
     case 3:
      return colors1;
      break;
     case 4:
      return chroma.brewer.OrRd;
      break;
     case 5:
      return chroma.brewer.OrRd;
      break;
     case 6:
      return chroma.brewer.OrRd;
      break;
     case 7:
      return chroma.brewer.OrRd;
      break;
     case 8:
      return chroma.brewer.OrRd;
      break;
     case 9:
      return colors1;
      break;
     case 10:
      return colors1;
      break;
     case 11:
      return colors1;
      break;
     case 12:
      return colors1;
      break;
     case 13:
      return colors1;
      break;
     case 14:
      return colors1;
      break;
     case 15:
      return colors1;
      break;
     case 16:
      return colors1;
      break;
     case 17:
      return colors1;
      break;
  }
}
function revisaContra() {
  var contra= document.getElementById("contra").value
  var usuario= document.getElementById("usu").value;
  console.log(usuario);
  console.log(contra);
  var result= usucontra.find(({ usuario }) => usuario === usuario);
  console.log(result);
  if (result!= "undefined"){
    if (usuario!=result.usuario && contra!= result.contra ){
      document.getElementById("divContra").style.display="block";
      document.getElementById("errorContra").innerHTML="Usuario y contraseña incorrectos";
      document.getElementById("errorContra").style.visibility="visible";
    }
    else {
      if(usuario!=result.usuario){
        document.getElementById("divContra").style.display="block";
        document.getElementById("errorContra").innerHTML="Usuario incorrecto";
        document.getElementById("errorContra").style.visibility="visible";
      }
      else{
        if(contra!=result.contra){
          document.getElementById("divContra").style.display="block";
          document.getElementById("errorContra").innerHTML="Contraseña incorrecta";
          document.getElementById("errorContra").style.visibility="visible";
        }
        else{
          document.getElementById("divContra").style.display="none";
          document.getElementById("errorContra").style.visibility="hidden";
        }
      }
    }
  }
  else
  {
    document.getElementById("divContra").style.display="block";
    document.getElementById("errorContra").innerHTML="Usuario no registrado";
    document.getElementById("errorContra").style.visibility="visible";
  }
}
