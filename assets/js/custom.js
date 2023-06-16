// Add any custom javafuscript here.
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
  var contra= document.getElementById("contra").value;
  console.log(contra);
  if (contra=="password"){
    document.getElementById("divContra").style.display="none";
    document.getElementById("errorContra").style.visibility="hidden";
  }
  else {
    document.getElementById("divContra").style.display="block";
    document.getElementById("errorContra").style.visibility="visible";
  }
  
}
