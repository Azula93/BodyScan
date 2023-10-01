
// funcion para limitar la cantidad de numeros ingresados en los inputs
function limitarNumero(input, maxLength) {
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
      document.getElementById('errorMensajePPM').textContent = 'Máximo 3 dígitos permitidos.';
      document.getElementById('errorMensajeH').textContent = 'Máximo 3 dígitos permitidos.';
      
    } else {
      document.getElementById('errorMensajePPM').textContent = '';
    }
  };


// PONER UN ALERT ANTES DE DAR ACCESO A LA PAG

function calculoVo2(){
    
    let BPM = document.getElementById("BPM").value;
    let altura = document.getElementById("H").value;

    let H = altura/100;

    let PPM = BPM /4;

    let Vo2Max = Math.trunc(PPM * 0.2 + PPM * H * 1.33 * 1.8 + 3.5);

    let Mets = Vo2Max/3.5;

    document.getElementById("resultadoVo2").innerHTML = `${Vo2Max} ml/kg/min`;
    document.getElementById("numMets").innerHTML = `${Math.trunc(Mets)} `;

    let resultadoMets='';


    switch(true){

        case Math.trunc(Mets) <= 9 :
        resultadoMets = `Tu condicion fisica es MUY MALA`;
        console.log(resultadoMets);
        break;

        case Math.trunc(Mets) == 10 :
        resultadoMets = `Tu condicion fisica es REGULAR`;
        console.log(resultadoMets);
        break;

        case Math.trunc(Mets) == 11 :
        resultadoMets = `Tu condicion fisica es SALUDABLE`;
        console.log(resultadoMets);
        break;

        case Math.trunc(Mets) == 12 || Math.trunc(Mets) ==13 :
        resultadoMets = `Tu condicion fisica es BUENA`;
        console.log(resultadoMets);
        break;

        case Math.trunc(Mets) >= 14 :
        resultadoMets = `Tu condicion fisica es MUY BUENA`;
        console.log(resultadoMets);
        break;

        default:
            resultadoMets = `error`;
    }
    document.getElementById("resultadoMets").innerHTML = resultadoMets;
 }

 function ExpectativaVida(){

    // Toma los datos ingresados en la actividad fisica de la expectativa de vida
   const opcinesActFisica = document.getElementsByName("expectvida");
   let ActividadFisicaExpectVida = "";

   for (const opcion of opcinesActFisica) {
     if (opcion.checked) {
        ActividadFisicaExpectVida = opcion.value;
       break; 
     }
   };
   console.log(ActividadFisicaExpectVida);

    let BPM = document.getElementById("BPM").value;
    let altura = document.getElementById("H").value;

    let H = altura/100;

    let PPM = BPM /4;

    let Vo2Max = Math.trunc(PPM * 0.2 + PPM * H * 1.33 * 1.8 + 3.5);

    let inactivo = Vo2Max/0.5;
    let activo = Vo2Max/0.4;

    let resultadoExpectVida = ''

    switch(true){
        case ActividadFisicaExpectVida == 'menos 3 v-s':
            resultadoExpectVida = inactivo;
            break;

        case ActividadFisicaExpectVida == 'mas 3 v-s':
            resultadoExpectVida = activo;
            break;

    }
    document.getElementById("resultadoexpectVida").innerHTML = resultadoExpectVida;
 }