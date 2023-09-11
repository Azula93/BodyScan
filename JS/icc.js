
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
    let seleccionado = "";

    for (const opcion of opciones) {
      if (opcion.checked) {
        seleccionado = opcion.value;
        break; // Sale del bucle tan pronto como se encuentra una opción seleccionada
      }
    }
    console.log("Opción seleccionada:", seleccionado);


    let cintura = document.getElementById("cintura").value;
    let cadera = document.getElementById("cadera").value;

    const formulaIcc = (cintura/cadera).toFixed(2);
    document.getElementById("resultadoIcc").innerHTML = formulaIcc;


    switch (true) {

      case formulaIcc < 0.85 && seleccionado === "mujer":
        seleccionado  = "Esto se clasifica como: SIN RIESGO CARDIOVASCULAR";
        break;
        
      case formulaIcc  > 0.85 && seleccionado === "mujer":
        seleccionado  = "Esto se clasifica como: CON RIESGO CARDIOVASCULAR";
        break;

      case formulaIcc < 0.94 && seleccionado === "hombre":
        seleccionado  = "Esto se clasifica como: SIN RIESGO CARDIOVASCULAR";
          break;  

      case formulaIcc  > 0.94 && seleccionado === "hombre":
          seleccionado  = "Esto se clasifica como: CON RIESGO CARDIOVASCULAR";
          break;

      default:
        seleccionado = " verifica tus datos"

}
  document.getElementById("resultadoIcc").innerHTML += ` ${seleccionado}`;
}