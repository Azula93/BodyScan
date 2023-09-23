
// funcion para limitar la cantidad de numeros ingresados en los inputs
function limitarNumero(input, maxLength) {
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
      document.getElementById('errorMensaje').textContent = 'Máximo 3 dígitos permitidos.';
    } else {
      document.getElementById('errorMensaje').textContent = '';
    }
  };

//   Tomando el datos ingresados en el input

const calculoImc = () =>{
  console.log("La función calculoImc se está ejecutando");
    
    let talla = document.getElementById("talla").value;
    let tallaDecimal = parseFloat(talla);
    let peso = document.getElementById("peso").value;
    let resultado = '';
    
    const formulaImc = (Math.floor (peso / (tallaDecimal*tallaDecimal)) );
    document.getElementById("numImc").innerHTML = formulaImc;
   
    

    switch (true) {

      case formulaImc < 18.5:
        resultado  = "Esto se clasifica como: <b>BAJO PESO</b> ";
        break;
        
      case formulaImc  >= 18.5 && formulaImc <= 24.9:
        resultado  = "Esto se clasifica como: <b>PESO NORMAL</b>";
        break;
        
      case formulaImc  >= 25 && formulaImc <= 29.9:
        resultado  = "Esto se clasifica como: <b>OBESIDAD</b>";
        break;

      case formulaImc  >= 30 && formulaImc <= 34.9:
        resultado  = "Esto se clasifica como: <b>OBESIDAD GRADO I</b>";
        break;
        
      case formulaImc  >= 35 && formulaImc <= 39.9:
        resultado  = "Esto se clasifica como: <b>OBESIDAD GRADO II</b>";
        break;
  
      case formulaImc  >= 40:
        resultado  = "Esto se clasifica como: <b> OBESIDAD GRADO III</b>";
        break;

      default:
        resultado = " verifica tus datos"
        
}

    document.getElementById("resultadoImc").innerHTML += ` ${resultado}`;
}
