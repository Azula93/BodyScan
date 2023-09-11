
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
    
    let cintura = document.getElementById("cintura").value;
    let cadera = document.getElementById("cadera").value;
    
    
    const formulaIcc = (cintura/cadera).toFixed(2);
    document.getElementById("resultadoIcc").innerHTML = formulaIcc;


    switch (true) {

      case formulaIcc < 18.5:
        resultado  = "Esto se clasifica como: BAJO PESO";
        break;
        
      case formulaIcc  >= 18.5 && formulaIcc <= 24.9:
        resultado  = "Esto se clasifica como: PESO NORMAL";
        break;
        
      case formulaIcc  >= 25 && formulaIcc <= 29.9:
        resultado  = "Esto se clasifica como: OBESIDAD";
        break;

      case formulaIcc  >= 30 && formulaIcc <= 34.9:
        resultado  = "Esto se clasifica como: OBESIDAD GRADO I";
        break;
        
      case formulaIcc  >= 35 && formulaIcc <= 39.9:
        resultado  = "Esto se clasifica como: OBESIDAD GRADO II";
        break;
  
      case formulaIcc  >= 40:
        resultado  = "Esto se clasifica como: OBESIDAD GRADO III";
        break;

      default:
        resultado = " verifica tus datos"

}
  document.getElementById("resultadoImc").innerHTML += ` ${resultado}`;
}