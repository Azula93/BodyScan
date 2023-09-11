
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
    
}