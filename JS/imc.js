
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
  console.log("La función calculoImc se está ejecutando");
    
    let talla = document.getElementById("talla").value;
    let tallaDecimal = parseFloat(talla);
    let peso = document.getElementById("peso").value;
    let resultado = '';
    
    const formulaImc = (Math.floor (peso / (tallaDecimal*tallaDecimal)) );
    document.getElementById("resultadoImc").innerHTML = formulaImc;
   
    

    switch (true) {

      case formulaImc < 18.5:
        resultado  = "Esto se clasifica como: BAJO PESO";
        break;
        
      case formulaImc  >= 18.5 && formulaImc <= 24.9:
        resultado  = "Esto se clasifica como: PESO NORMAL";
        break;
        
      case formulaImc  >= 25 && formulaImc <= 29.9:
        resultado  = "Esto se clasifica como: OBESIDAD";
        break;

      case formulaImc  >= 30 && formulaImc <= 34.9:
        resultado  = "Esto se clasifica como: OBESIDAD GRADO I";
        break;
        
      case formulaImc  >= 35 && formulaImc <= 39.9:
        resultado  = "Esto se clasifica como: OBESIDAD GRADO II";
        break;
  
      case formulaImc  >= 40:
        resultado  = "Esto se clasifica como: OBESIDAD GRADO III";
        break;

      default:
        resultado = " verifica tus datos"
        
}

    document.getElementById("resultadoImc").innerHTML += ` ${resultado}`;
}
