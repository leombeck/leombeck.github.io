var nombre = document.getElementById("nombre");
var error = document.getElementById("error");
error.style.color = "red";

function enviarFormulario(){
  console.log("Enviando formulario...");

  var mensajesError = [];

  if(nombre.value === null || nombre.value === ""){
    mensajesError.push ("Ingresa tu nombre");
  }
  error.innerHTML = mensajesError.join(" ");
  return false;
}