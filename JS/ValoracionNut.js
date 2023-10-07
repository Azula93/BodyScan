// funcion para limitar la cantidad de numeros ingresados en los inputs
const getResultImg = '/assets/img(31).svg';

function limitarNumero(input, maxLength) {
  if (input.value.length > maxLength) {
    input.value = input.value.slice(0, maxLength);
    document.getElementById('errorMensajeTalla').textContent = 'Máximo 3 dígitos permitidos.';
    document.getElementById('errorMensajePeso').textContent = 'Máximo 3 dígitos permitidos.';
    document.getElementById('errorMensajeEdad').textContent = 'Máximo 2 dígitos permitidos.';
  } else {
    document.getElementById('errorMensajeTalla').textContent = '';
  }
};

function GeneroSeleccionado () {
  // Toma los datos ingresados en el genero
  const opcionesGenero = document.getElementsByName("genero");
  let Generoseleccionado = "";

  for (const opcion of opcionesGenero) {
    if (opcion.checked) {
      Generoseleccionado = opcion.value;
      break; // Sale del bucle tan pronto como se encuentra una opción seleccionada
    }
  }
  console.log(Generoseleccionado);
  return GeneroSeleccionado;
};

function factorActividad  () {
   // Toma los datos ingresados en el factor de actividad
   const opcionesFactorAct = document.getElementsByName("factorActividad");
   let factorActividad = "";

   for (const opcion of opcionesFactorAct) {
     if (opcion.checked) {
      factorActividad = opcion.value;
       break; 
     }
   };
   console.log(factorActividad);
   return factorActividad;
};


function EleccionDeporte  () {
  // Toma los datos ingresados en el deporte
 const opcionesDeporte = document.getElementsByName("Deportista");
 let Deporteseleccionado = "";

 for (const opcion of opcionesDeporte) {
   if (opcion.checked) {
     Deporteseleccionado = opcion.value;
     break; 
   }
 }
 console.log(Deporteseleccionado);
 return Deporteseleccionado;
};


function calculoGet ()  {

         // Toma los datos ingresados en el factor de actividad
   const opcionesFactorAct = document.getElementsByName("factorActividad");
   let factorActividad = "";

   for (const opcion of opcionesFactorAct) {
     if (opcion.checked) {
      factorActividad = opcion.value;
       break; 
     }
   };
  

        // Toma los datos ingresados en el genero
  const opcionesGenero = document.getElementsByName("genero");
  let Generoseleccionado = "";

  for (const opcion of opcionesGenero) {
    if (opcion.checked) {
      Generoseleccionado = opcion.value;
      break; // Sale del bucle tan pronto como se encuentra una opción seleccionada
    }
  }
  

       let resultadoGet = "";

       let talla =document.getElementById("talla").value;     
       let peso = document.getElementById("peso").value;  
       let edad = document.getElementById("edad").value;
      
       
        // FORMULAS

        let formulaHombresSedentario = (66.5 + 13.75 * peso +5.0 * talla -6.78 * edad)*1.2;
        let formulaHombresLeve = (66.5 + 13.75 * peso +5.0 * talla -6.78 * edad)*1.55;
        let formulaHombresModerada = (66.5 + 13.75 * peso +5.0 * talla -6.78 * edad)*1.8;
        let formulaHombresIntensa = (66.5 + 13.75 * peso +5.0 * talla -6.78 * edad)*2.1;
        
        let formulaMujeresSedentaria = (655 + 9.56 * peso + 1.85 * talla - 4.68 * edad)*1.2;
        let formulaMujeresLeve = (655 + 9.56 * peso + 1.85 * talla - 4.68 * edad)*1.56;
        let formulaMujeresModerada = (655 + 9.56 * peso + 1.85 * talla - 4.68 * edad) * 1.64;
        let formulaMujeresIntensa = (655 + 9.56 * peso + 1.85 * talla - 4.68 * edad)*1.82;
        

     switch (true) {

         // Casos mujeres
         case Generoseleccionado === 'mujer' && factorActividad === "Menos de 3 horas semanales":
             resultadoGet  = `Tu gasto energético total es de <b> ${Math.trunc(formulaMujeresSedentaria)} </b> kcal <img class="Getimgresult" src="${getResultImg}" alt="ImagenOK">`;
           break;

           case Generoseleccionado === 'mujer' && factorActividad === "3 Horas semanales":
             resultadoGet  = `Tu gasto energético total es de  <b> ${Math.trunc(formulaMujeresLeve)} </b> kcal <img class="Getimgresult" src="${getResultImg}" alt="ImagenOK">`;
           break;

          case Generoseleccionado === 'mujer' && factorActividad === "6 Horas semanales":
            resultadoGet  = `Tu gasto energético total es de <b> ${Math.trunc(formulaMujeresModerada)}</b> kcal <img class="Getimgresult" src="${getResultImg}" alt="ImagenOK">`;
          break;

          case Generoseleccionado === 'mujer' && factorActividad === "4-5 horas Diarias":
            resultadoGet  = `Tu gasto energético total es de <b> ${Math.trunc(formulaMujeresIntensa)}</b> kcal <img class="Getimgresult" src="${getResultImg}" alt="ImagenOK">`;
          break;

        //   CASOS HOMBRES
          case Generoseleccionado === 'hombre' && factorActividad === "Menos de 3 horas semanales":
            resultadoGet  = `Tu gasto energético total es de <b> ${Math.trunc(formulaHombresSedentario)}</b> kcal <img class="Getimgresult" src="${getResultImg}" alt="ImagenOK">`;
          break;

          case Generoseleccionado === 'hombre' && factorActividad === "3 Horas semanales":
            resultadoGet  = `Tu gasto energético total es de <b> ${Math.trunc(formulaHombresLeve)}</b> kcal <img class="Getimgresult" src="${getResultImg}" alt="ImagenOK">`;
          break;

          case Generoseleccionado === 'hombre' && factorActividad === "6 Horas semanales":
            resultadoGet  = `Tu gasto energético total es de <b> ${Math.trunc(formulaHombresModerada)}</b> kcal <img class="Getimgresult" src="${getResultImg}" alt="ImagenOK">`;
          break;

          case Generoseleccionado === 'hombre' && factorActividad === "4-5 horas Diarias":
            resultadoGet  = `Tu gasto energético total es de <b> ${Math.trunc(formulaHombresIntensa)}</b> kcal <img class="Getimgresult" src="${getResultImg}" alt="ImagenOK">`;
          break;

        default:
            resultadoGet = `<p class="textoGetResult text-danger"> Ingresa los datos correspondientes!</p>`

    }

  // muestra el resultado en pantalla
  document.getElementById("resultadoGet").innerHTML = resultadoGet;

};

const imgMacro = '/assets/img(20).svg'


// Funcion para calcular los macronutientes en Gramos
  function macronutrientesDiarios(){

    let talla =document.getElementById("talla").value;     
    let peso = document.getElementById("peso").value;  
    let edad = document.getElementById("edad").value;

    // Toma los datos ingresados en el factor de actividad
   const opcionesFactorAct = document.getElementsByName("factorActividad");
   let factorActividad = "";

   for (const opcion of opcionesFactorAct) {
     if (opcion.checked) {
      factorActividad = opcion.value;
       break; 
     }
   };
   console.log(factorActividad);

   // Toma los datos ingresados en el genero
    const opcionesGenero = document.getElementsByName("genero");
    let Generoseleccionado = "";

    for (const opcion of opcionesGenero) {
      if (opcion.checked) {
        Generoseleccionado = opcion.value;
        break; // Sale del bucle tan pronto como se encuentra una opción seleccionada
      }
    }
    console.log(Generoseleccionado);

    // Toma los datos ingresados en el deporte
    const opcionesDeporte = document.getElementsByName("Deportista");
    let Deporteseleccionado = "";

    for (const opcion of opcionesDeporte) {
      if (opcion.checked) {
        Deporteseleccionado = opcion.value;
        break; 
      }
    }
    console.log(Deporteseleccionado);

    // FORMULA HOMBRES GET
    let formulaHombresSedentario = ((66.5 + 13.75 * peso +5.0 * talla -6.78 * edad)*1.2);
    let formulaHombresLeve = (66.5 + 13.75 * peso +5.0 * talla -6.78 * edad)*1.55;
    let formulaHombresModerada = (66.5 + 13.75 * peso +5.0 * talla -6.78 * edad)*1.8;
    let formulaHombresIntensa = ((66.5 + 13.75 * peso +5.0 * talla -6.78 * edad)*2.1);

    // FORMULAS PORCENTAJES HOMBRES DEPORTISTAS
    let GrChosHombresSed =  ((formulaHombresSedentario) * 0.50);
    let GrProtHombreSed  =  ((formulaHombresSedentario) * 0.25);
    let GrGrasasHombreSed = ((formulaHombresSedentario) * 0.25);

    let GrChosHombreLeve =    ((formulaHombresLeve) * 0.50);
    let GrProtHombreLeve  =   ((formulaHombresLeve) * 0.25);
    let GrGrasasHombreLeve =  ((formulaHombresLeve) * 0.25);


    let GrChosHombreMod =   ((formulaHombresModerada) * 0.50);
    let GrProtHombreMod  =  ((formulaHombresModerada) * 0.25);
    let GrGrasasHombreMod = ((formulaHombresModerada) * 0.25);

    let GrChosHombreInt =   ((formulaHombresIntensa) * 0.50);
    let GrProtHombreInt  =  ((formulaHombresIntensa) * 0.25);
    let GrGrasasHombreInt = ((formulaHombresIntensa) * 0.25);

     // FORMULAS PORCENTAJES HOMBRES NODEPORTISTAS
     let GrChosHombresSedND =((formulaHombresSedentario) * 0.60);
     let GrProtHombreSedND  =((formulaHombresSedentario) * 0.25);
     let GrGrasasHombreSedND =((formulaHombresSedentario) * 0.15);
 
     let GrChosHombreLeveND =   ((formulaHombresLeve) * 0.60);
     let GrProtHombreLeveND  =  ((formulaHombresLeve) * 0.25);
     let GrGrasasHombreLeveND = ((formulaHombresLeve) * 0.15);
     
     let GrChosHombreModND =    ((formulaHombresModerada) * 0.60);
     let GrProtHombreModND  =   ((formulaHombresModerada) * 0.25);
     let GrGrasasHombreModND =  ((formulaHombresModerada) * 0.15);
 
     let GrChosHombreIntND =   ((formulaHombresIntensa) * 0.60);
     let GrProtHombreIntND  =  ((formulaHombresIntensa) * 0.25);
     let GrGrasasHombreIntND = ((formulaHombresIntensa) * 0.15);


    // FORMULA MUJERES GET
    let formulaMujeresSedentaria = ((655 + 9.56 * peso + 1.85 * talla - 4.68 * edad) * 1.2);
    let formulaMujeresLeve = ((655 + 9.56 * peso + 1.85 * talla - 4.68 * edad) *  1.56);
    let formulaMujeresModerada = ((655 + 9.56 * peso + 1.85 * talla - 4.68 * edad) * 1.64);
    let formulaMujeresIntensa = ((655 + 9.56 * peso + 1.85 * talla - 4.68 * edad) * 1.82);


    // FORMULAS PORCENTAJES MUJERES DEPORTISTAS
    let GrChosMujerSed =      ((formulaMujeresSedentaria) * 0.50);
    let GrProtMujerSed  =    ((formulaMujeresSedentaria) * 0.25);
    let GrGrasasMujerSed =   ((formulaMujeresSedentaria) * 0.25);

    let GrChosMujerLeve=      ((formulaMujeresLeve) * 0.50);
    let GrProtMujerLeve  =    ((formulaMujeresLeve) * 0.25);
    let GrGrasasMujerLeve =   ((formulaMujeresLeve) * 0.25);
    
    let GrChosMujerMod=      ((formulaMujeresModerada) * 0.50);
    let GrProtMujerMod  =    ((formulaMujeresModerada) * 0.25);
    let GrGrasasMujerMod =   ((formulaMujeresModerada) * 0.25);

    let GrChosMujerInt=      ((formulaMujeresIntensa) * 0.50);
    let GrProtMujerInt  =    ((formulaMujeresIntensa) * 0.25);
    let GrGrasasMujerInt =   ((formulaMujeresIntensa) * 0.25);

    // FORMULAS PORCENTAJES MUJERES NO DEPORTISTAS
    let GrChosMujerSedND =  ((formulaMujeresSedentaria) * 0.60);
    let GrProtMujerSedND  = ((formulaMujeresSedentaria) * 0.25);
    let GrGrasasMujerSedND= ((formulaMujeresSedentaria) * 0.15);

    let GrChosMujerLeveND =  ((formulaMujeresLeve) * 0.60);
    let GrProtMujerLeveND  = ((formulaMujeresLeve) * 0.25);
    let GrGrasasMujerLeveND= ((formulaMujeresLeve) * 0.15);
    
    let GrChosMujerModND =  ((formulaMujeresModerada) * 0.60);
    let GrProtMujerModND =  ((formulaMujeresModerada) * 0.25);
    let GrGrasasMujerModND= ((formulaMujeresModerada) * 0.15);

    let GrChosMujerIntND =  ((formulaMujeresIntensa) * 0.60);
    let GrProtMujerIntND  = ((formulaMujeresIntensa) * 0.25);
    let GrGrasasMujerIntND= ((formulaMujeresIntensa) * 0.15);

    let macronutrientesGr = '';

    switch (true){

        // CASOS MUJERES DEPORTISTAS
          case Deporteseleccionado === 'Deportista' && factorActividad === 'Menos de 3 horas semanales' && Generoseleccionado ==='mujer' :
        macronutrientesGr = `Tu requerimiento de Carbohidratos es <b>${Math.trunc(GrChosMujerSed)} gr</b> ,<br>
        Tu requerimiento de Proteinas es <b>${Math.trunc(GrProtMujerSed)}gr</b>,<br>
        Tu requerimiento de Grasas es <b>${Math.trunc(GrGrasasMujerSed)}gr</b> <img class="imgMacro" src="${imgMacro}" alt="ImagenOK">`;
        console.log(macronutrientesGr);
        break;

          case Deporteseleccionado === 'Deportista' && factorActividad === '3 Horas semanales'  && Generoseleccionado ==='mujer':
          macronutrientesGr = `Tu requerimiento de Carbohidratos es <b>${Math.trunc(GrChosMujerLeve)}gr</b>,<br>
          Tu requerimiento de Proteinas es<b> ${Math.trunc(GrProtMujerLeve)}gr</b>,<br>
          Tu requerimiento de Grasas es <b>${Math.trunc(GrGrasasMujerLeve)}gr</b> <img class="imgMacro" src="${imgMacro}" alt="ImagenOK">`;
          break;

          case Deporteseleccionado === 'Deportista' && factorActividad === '6 Horas semanales'  && Generoseleccionado ==='mujer':
          macronutrientesGr = `Tu requerimiento de Carbohidratos es <b>${Math.trunc(GrChosMujerMod)}gr</b>,<br>
          Tu requerimiento de Proteinas es <b>${Math.trunc(GrProtMujerMod)}gr</b>,<br>
          Tu requerimiento de Grasas es <b>${Math.trunc(GrGrasasMujerMod)}gr</b> <img class="imgMacro" src="${imgMacro}" alt="ImagenOK">`;
          console.log(macronutrientesGr);
          break;

          case Deporteseleccionado === 'Deportista' && factorActividad === '4-5 horas Diarias'  && Generoseleccionado ==='mujer':
            macronutrientesGr = `Tu requerimiento de Carbohidratos es <b>${Math.trunc(GrChosMujerInt)}gr</b>,<br>
            Tu requerimiento de Proteinas es <b>${Math.trunc(GrProtMujerInt)}gr</b>,<br>
            Tu requerimiento de Grasas <b>es ${Math.trunc(GrGrasasMujerInt)}gr</b> <img class="imgMacro" src="${imgMacro}" alt="ImagenOK">`;
            console.log(macronutrientesGr);
            break;


          // CASOS MUJERES NO DEPORTISTAS
          case Deporteseleccionado === 'No deportista' && factorActividad === 'Menos de 3 horas semanales'  && Generoseleccionado ==='mujer':
           macronutrientesGr = `Tu requerimiento de Carbohidratos es <b>${Math.trunc(GrChosMujerSedND)}gr</b>,<br>
           Tu requerimiento de Proteinas es <b>${Math.trunc(GrProtMujerSedND)}gr</b>,<br>
           Tu requerimiento de Grasas es <b>${Math.trunc(GrGrasasMujerSedND)}gr</b> <img class="imgMacro" src="${imgMacro}" alt="ImagenOK">`;
           console.log(macronutrientesGr);
           break;

         case Deporteseleccionado === 'No deportista' && factorActividad === '3 Horas semanales'  && Generoseleccionado ==='mujer':
           macronutrientesGr = `Tu requerimiento de Carbohidratos es <b>${Math.trunc(GrChosMujerLeveND)}gr</b>,<br>
           Tu requerimiento de Proteinas es <b>${Math.trunc(GrProtMujerLeveND)}gr</b>,<br>
           Tu requerimiento de Grasas es <b>${Math.trunc(GrGrasasMujerLeveND)}gr</b> <img class="imgMacro" src="${imgMacro}" alt="ImagenOK">`;
           console.log(macronutrientesGr);
           break;

         case Deporteseleccionado === 'No deportista' && factorActividad === '6 Horas semanales'  && Generoseleccionado ==='mujer':
            macronutrientesGr = `Tu requerimiento de Carbohidratos es <b>${Math.trunc(GrChosMujerModND)}gr</b>,<br>
            Tu requerimiento de Proteinas es <b>${Math.trunc(GrProtMujerModND)}gr</b>,<br>
            Tu requerimiento de Grasas es <b>${Math.trunc(GrGrasasMujerModND)}gr</b> <img class="imgMacro" src="${imgMacro}" alt="ImagenOK">`;   
            console.log(macronutrientesGr);
            break;

         case Deporteseleccionado === 'No deportista' && factorActividad === '4-5 horas Diarias'  && Generoseleccionado ==='mujer':
          macronutrientesGr = `Tu requerimiento de Carbohidratos es <b>${Math.trunc(GrChosMujerIntND)}gr</b>,<br>
         Tu requerimiento de Proteinas es <b>${Math.trunc(GrProtMujerIntND)}gr</b>,<br>
         Tu requerimiento de Grasas es <b>${Math.trunc(GrGrasasMujerIntND)}gr</b> <img class="imgMacro" src="${imgMacro}" alt="ImagenOK">`;   
         console.log(macronutrientesGr);
         break;
        
        
        
         // CASOS HOMBRES DEPORTISTAS

         case Deporteseleccionado === 'Deportista' && factorActividad === 'Menos de 3 horas semanales'  && Generoseleccionado ==='hombre':
         macronutrientesGr = `Tu requerimiento de Carbohidratos es <b>${Math.trunc(GrChosHombresSed)}gr</b>,<br>
         Tu requerimiento de Proteinas es <b>${Math.trunc(GrProtHombreSed)}gr</b>,<br>
         Tu requerimiento de Grasas es <b>${Math.trunc(GrGrasasHombreSed)}gr</b> <img class="imgMacro" src="${imgMacro}" alt="ImagenOK">`;
         console.log(macronutrientesGr);
         break;

         case Deporteseleccionado === 'Deportista' && factorActividad === '3 Horas semanales'  && Generoseleccionado ==='hombre':
          macronutrientesGr = `Tu requerimiento de Carbohidratos es <b>${Math.trunc(GrChosHombreLeve)}gr</b>,<br>
          Tu requerimiento de Proteinas es<b> ${Math.trunc(GrProtHombreLeve)}gr</b>,<br>
          Tu requerimiento de Grasas es<b> ${Math.trunc(GrGrasasHombreLeve)}gr</b> <img class="imgMacro" src="${imgMacro}" alt="ImagenOK">`;
          console.log(macronutrientesGr);
          break;

          case Deporteseleccionado === 'Deportista' && factorActividad === '6 Horas semanales'  && Generoseleccionado ==='hombre':
            macronutrientesGr = `Tu requerimiento de Carbohidratos es <b>${Math.trunc(GrChosHombreMod)}gr</b>,<br>
            Tu requerimiento de Proteinas es <b>${Math.trunc(GrProtHombreMod)}gr</b>,<br>
            Tu requerimiento de Grasas es <b>${Math.trunc(GrGrasasHombreMod)}gr</b> <img class="imgMacro" src="${imgMacro}" alt="ImagenOK">`;
            console.log(macronutrientesGr);
            break;

          case Deporteseleccionado === 'Deportista' && factorActividad === '4-5 horas Diarias'  && Generoseleccionado ==='hombre':
           macronutrientesGr = `Tu requerimiento de Carbohidratos es <b>${Math.trunc(GrChosHombreInt)}gr</b>,<br>
           Tu requerimiento de Proteinas es <b>${Math.trunc(GrProtHombreInt)}gr</b>,<br>
           Tu requerimiento de Grasas es <b>${Math.trunc(GrGrasasHombreInt)}gr</b> <img class="imgMacro" src="${imgMacro}" alt="ImagenOK">`; 
           console.log(macronutrientesGr);  
           break;



          //  CASOS HOMBRES NO DEPORTISTAS
          case Deporteseleccionado === 'No deportista' && factorActividad === 'Menos de 3 horas semanales'  && Generoseleccionado ==='hombre':
            macronutrientesGr = `Tu requerimiento de Carbohidratos es <b>${Math.trunc(GrChosHombresSedND)}gr</b>,<br>
            Tu requerimiento de Proteinas es <b>${Math.trunc(GrProtHombreSedND)}gr</b>,<br>
            Tu requerimiento de Grasas es <b>${Math.trunc(GrGrasasHombreSedND)}gr</b> <img class="imgMacro" src="${imgMacro}" alt="ImagenOK">`;
            break;

          case Deporteseleccionado === 'No deportista' && factorActividad === '3 Horas semanales'  && Generoseleccionado ==='hombre':
              macronutrientesGr = `Tu requerimiento de Carbohidratos es <b>${Math.trunc(GrChosHombreLeveND)}gr</b>,<br>
              Tu requerimiento de Proteinas es <b>${Math.trunc(GrProtHombreLeveND)}gr</b>,<br>
              Tu requerimiento de Grasas es <b>${Math.trunc(GrGrasasHombreLeveND)}gr</b> <img class="imgMacro" src="${imgMacro}" alt="ImagenOK">`;
              break;

          case Deporteseleccionado === 'No eportista' && factorActividad == '6 Horas semanales'  && Generoseleccionado ==='hombre':
            macronutrientesGr = `Tu requerimiento de Carbohidratos es <b>${Math.trunc(GrChosHombreModND)}gr</b>,<br>
            Tu requerimiento de Proteinas es <b>${Math.trunc(GrProtHombreModND)}gr</b>,<br>
            Tu requerimiento de Grasas es <b>${Math.trunc(GrGrasasHombreModND)}gr</b> <img class="imgMacro" src="${imgMacro}" alt="ImagenOK">`;
            break;

          case Deporteseleccionado === 'No deportista' && factorActividad === '4-5 horas Diarias'  && Generoseleccionado ==='hombre':
            macronutrientesGr = `Tu requerimiento de Carbohidratos es <b>${Math.trunc(GrChosHombreIntND)}gr</b>,<br>
            Tu requerimiento de Proteinas es <b>${Math.trunc(GrProtHombreIntND)}gr</b>,<br>
            Tu requerimiento de Grasas es <b>${Math.trunc(GrGrasasHombreIntND)}gr</b> <img class="imgMacro" src="${imgMacro}" alt="ImagenOK">`;
            break;
            
          default:
          macronutrientesGr = " Verifica que hayas ingresado todos los datos !"

    } 

    document.getElementById("resultadoMacronut").innerHTML = macronutrientesGr;
    console.log(macronutrientesGr);

    }