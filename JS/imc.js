
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

const calculoImc = () =>{
    
    let talla = document.getElementById("talla").value;
    let tallaDecimal = parseFloat(talla);
    let peso = document.getElementById("peso").value;
    
    
    const formulaImc = (Math.floor (peso / (tallaDecimal*tallaDecimal)) );
    document.getElementById("resultadoImc").innerHTML = formulaImc;

    if(formulaImc >30 && formulaImc < 34.9){
      document.getElementById("riesgoImc").innerHTML = "riesgo";
    }else{
      document.getElementById("riesgoImc").innerHTML = "sin riesgo";
    }
    
}