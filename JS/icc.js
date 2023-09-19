
// funcion para limitar la cantidad de numeros ingresados en los inputs
function limitarNumero(input, maxLength) {
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
      document.getElementById('errorMensaje').textContent = 'Máximo 3 dígitos permitidos.';
    } else {
      document.getElementById('errorMensaje').textContent = '';
    }
  };


//   Tomando el dato ingresado en el input
const calculoIcc = () =>{

    const opciones = document.getElementsByName("genero");
    let Generoseleccionado = "";

    for (const opcion of opciones) {
      if (opcion.checked) {
        Generoseleccionado = opcion.value;
        break; // Sale del bucle tan pronto como se encuentra una opción seleccionada
      }
    }
    

    let cintura = document.getElementById("cintura").value;
    let cadera = document.getElementById("cadera").value;

    const formulaIcc = (cintura/cadera).toFixed(2);
    document.getElementById("numIcc").innerHTML = formulaIcc;

    let resultadoIcc = "";

    switch (true) {

      case formulaIcc < 0.85 && Generoseleccionado === "mujer":
        resultadoIcc  = "Esto se clasifica como: <b> SIN RIESGO CARDIOVASCULAR</b>";
        break;
        
      case formulaIcc  > 0.85 && Generoseleccionado === "mujer":
        resultadoIcc  = "Esto se clasifica como: <b> CON RIESGO CARDIOVASCULAR </b>";
        break;

      case formulaIcc < 0.94 && Generoseleccionado === "hombre":
        resultadoIcc  = "Esto se clasifica como: <b>SIN RIESGO CARDIOVASCULAR </b>";
          break;  

      case formulaIcc  > 0.94 && Generoseleccionado === "hombre":
        resultadoIcc  = "Esto se clasifica como: <b> CON RIESGO CARDIOVASCULAR </b>";
          break;

      default:
        resultadoIcc = " Verifica que los datos Ingresados sean correctos"

}
document.getElementById("resultadoIcc").innerHTML = resultadoIcc;
}