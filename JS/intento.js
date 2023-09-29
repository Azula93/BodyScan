
// funcion para limitar la cantidad de numeros ingresados en los inputs
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

        let resultadoGet = "";

       
  
       const talla =document.getElementById("talla").value;     
       const peso = document.getElementById("peso").value;  
       const edad = document.getElementById("edad").value;
      
       
        // FORMULAS

        const formulaHombresSedentario = (66.5 + 13.75 * peso +5.0 * talla -6.78 * edad)*1.2;
        const formulaHombresLeve = (66.5 + 13.75 * peso +5.0 * talla -6.78 * edad)*1.55;
        const formulaHombresModerada = (66.5 + 13.75 * peso +5.0 * talla -6.78 * edad)*1.8;
        const formulaHombresIntensa = (66.5 + 13.75 * peso +5.0 * talla -6.78 * edad)*2.1;
        
        const formulaMujeresSedentaria = (655 + 9.56 * peso + 1.85 * talla - 4.68 * edad)*1.2;
        const formulaMujeresLeve = (655 + 9.56 * peso + 1.85 * talla - 4.68 * edad)*1.56;
        const formulaMujeresModerada = (655 + 9.56 * peso + 1.85 * talla - 4.68 * edad) * 1.64;
        const formulaMujeresIntensa = (655 + 9.56 * peso + 1.85 * talla - 4.68 * edad)*1.82;
        

     switch (true) {

         // Casos mujeres
         case Generoseleccionado == 'mujer' && factorActividad == "Menos de 3 horas semanales":
             resultadoGet  = `Tu gasto energético total es de ${Math.trunc(formulaMujeresSedentaria)} kcal`;
           break;

           case Generoseleccionado == 'mujer' && factorActividad == "3 Horas semanales":
             resultadoGet  = `Tu gasto energético total es de ${Math.trunc(formulaMujeresLeve)}  kcal`;
           break;

          case Generoseleccionado == 'mujer' && factorActividad == "6 Horas semanales":
            resultadoGet  = `Tu gasto energético total es de ${Math.trunc(formulaMujeresModerada)} kcal`;
            console.log(formulaHombresModerada, "prueba");
          break;

          case Generoseleccionado == 'mujer' && factorActividad == "4-5 horas semanales":
            resultadoGet  = `Tu gasto energético total es de ${Math.trunc(formulaMujeresIntensa)} kcal`;
          break;

        //   CASOS HOMBRES
          case Generoseleccionado == 'hombre' && factorActividad == "Menos de 3 horas semanales":
            resultadoGet  = `Tu gasto energético total es de ${Math.trunc(formulaHombresSedentario)} kcal`;
          break;

          case Generoseleccionado == 'hombre' && factorActividad == "3 Horas semanales":
            resultadoGet  = `Tu gasto energético total es de ${Math.trunc(formulaHombresLeve)} kcal`;
          break;

          case Generoseleccionado == 'hombre' && factorActividad == "6 Horas semanales":
            resultadoGet  = `Tu gasto energético total es de ${Math.trunc(formulaHombresModerada)} kcal`;
          break;

          case Generoseleccionado == 'hombre' && factorActividad == "4-5 horas semanales":
            resultadoGet  = `Tu gasto energético total es de ${Math.trunc(formulaHombresIntensa)} kcal`;
          break;

        default:
            resultadoGet = " Verifica que hayas ingresado todos los datos !"

    }

  // muestra el resultado en pantalla
  document.getElementById("resultadoGet").innerHTML = resultadoGet;
  console.log(resultadoGet);

  // document.getElementById("resultadoMacronut").textContent = `Tu requerimiento de carbohidratos en gramos es ${Math.trunc(GrCarbohidratos)},
  // Tu requerimiento de Proteinas en gramos es ${Math.trunc(GrProteinas)},
  // Tu requerimiento de Grasas en gramos es ${Math.trunc(GrGrasas)}`;

  // const MacroNut = macronutrientesDiarios();
   

};



  function macronutrientesDiarios (){

      const talla =document.getElementById("talla").value;     
      const peso = document.getElementById("peso").value;  
      const edad = document.getElementById("edad").value;

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
    const formulaHombresSedentario = (66.5 + 13.75 * peso +5.0 * talla -6.78 * edad)*1.2;
    const formulaHombresLeve = (66.5 + 13.75 * peso +5.0 * talla -6.78 * edad)*1.55;
    const formulaHombresModerada = (66.5 + 13.75 * peso +5.0 * talla -6.78 * edad)*1.8;
    const formulaHombresIntensa = (66.5 + 13.75 * peso +5.0 * talla -6.78 * edad)*2.1;

    // FORMULAS PORCENTAJES HOMBRES 
    const GrChosHombresSed =(formulaHombresSedentario * 0.50);
    const GrProtHombreSed  =(formulaHombresSedentario * 0.25);
    const GrGrasasHombreSed =(formulaHombresSedentario * 0.25);

    const GrChosHombreLeve =formulaHombresLeve * 0.50;
    const GrProtHombreLeve  =formulaHombresLeve * 0.25;
    const GrGrasasHombreLeve =formulaHombresLeve * 0.25;
    
    const GrChosHombreMod =formulaHombresModerada * 0.50;
    const GrProtHombreMod  =formulaHombresModerada * 0.25;
    const GrGrasasHombreMod =formulaHombresModerada * 0.25;

    const GrChosHombreInt =formulaHombresIntensa * 0.50;
    const GrProtHombreInt  =formulaHombresIntensa * 0.25;
    const GrGrasasHombreInt =formulaHombresIntensa * 0.25;


    // FORMULA MUJERES GET
    const formulaMujeresSedentaria = (655 + 9.56 * peso + 1.85 * talla - 4.68 * edad)*1.2;
    const formulaMujeresLeve = (655 + 9.56 * peso + 1.85 * talla - 4.68 * edad)*1.56;
    const formulaMujeresModerada = (655 + 9.56 * peso + 1.85 * talla - 4.68 * edad) * 1.64;
    const formulaMujeresIntensa = (655 + 9.56 * peso + 1.85 * talla - 4.68 * edad)*1.82;


    // FORMULAS PORCENTAJES MUJERES 
    const GrChosMujerSed =(formulaMujeresSedentaria * 0.50);
    const GrProtSed  =(formulaMujeresSedentaria * 0.25);
    const GrGrasasSed =(formulaMujeresSedentaria * 0.25);

    const GrChosMujerLeve =formulaMujeresLeve * 0.50;
    const GrProtLeve  =formulaMujeresLeve * 0.25;
    const GrGrasasLeve =formulaMujeresLeve * 0.25;
    
    const GrChosMujerMod =formulaMujeresModerada * 0.50;
    const GrProtMod  =formulaMujeresModerada * 0.25;
    const GrGrasasMod =formulaMujeresModerada * 0.25;

    const GrChosMujerInt =formulaMujeresIntensa * 0.50;
    const GrProtInt  =formulaMujeresIntensa * 0.25;
    const GrGrasasInt =formulaMujeresIntensa * 0.25;

    let macronutrientesGr = '';

    switch (true){

      // CASOS MUJERES
      case Deporteseleccionado == 'Deportista' && factorActividad == 'Menos de 3 horas semanales' && Generoseleccionado =='mujer' :
        macronutrientesGr = `Tu requerimiento de Carbohidratos es <b>${Math.trunc(GrChosMujerSed)} gr</b> ,<br>
        Tu requerimiento de Proteinas es <b>${Math.trunc(GrProtLeve)}gr</b>,<br>
        Tu requerimiento de Grasas es <b>${Math.trunc(GrGrasasSed)}gr</b>`;
        console.log(macronutrientesGr);
        break;

        case Deporteseleccionado == 'Deportista' && factorActividad == '3 Horas semanales'  && Generoseleccionado =='mujer':
          macronutrientesGr = `Tu requerimiento de Carbohidratos es <b>${Math.trunc(GrChosMujerLeve)}gr</b>,<br>
          Tu requerimiento de Proteinas es<b> ${Math.trunc(GrProtSed)}gr</b>,<br>
          Tu requerimiento de Grasas es <b>${Math.trunc(GrGrasasLeve)}gr</b>`;
          console.log(macronutrientesGr);
          break;

        case Deporteseleccionado == 'Deportista' && factorActividad == '6 Horas semanales'  && Generoseleccionado =='mujer':
          macronutrientesGr = `Tu requerimiento de Carbohidratos es <b>${Math.trunc(GrChosMujerMod)}gr</b>,<br>
          Tu requerimiento de Proteinas es <b>${Math.trunc(GrProtMod)}gr</b>,<br>
          Tu requerimiento de Grasas es <b>${Math.trunc(GrGrasasMod)}gr</b>`;
          console.log(macronutrientesGr);
          break;

         case Deporteseleccionado == 'Deportista' && factorActividad == '4-5 Horas semanales'  && Generoseleccionado =='mujer':
         macronutrientesGr = `Tu requerimiento de Carbohidratos es <b>${Math.trunc(GrChosMujerInt)}gr</b>,<br>
         Tu requerimiento de Proteinas es <b>${Math.trunc(GrProtInt)}gr</b>,<br>
         Tu requerimiento de Grasas <b>es ${Math.trunc(GrGrasasInt)}gr</b>`;
         console.log(macronutrientesGr);
         break;

         // CASOS HOMBRES

         case Deporteseleccionado == 'Deportista' && factorActividad == 'Menos de 3 horas semanales'  && Generoseleccionado =='hombre':
         macronutrientesGr = `Tu requerimiento de Carbohidratos es <b>${Math.trunc(GrChosHombresSed)}gr</b>,<br>
         Tu requerimiento de Proteinas es <b>${Math.trunc(GrProtHombreSed)}gr</b>,<br>
         Tu requerimiento de Grasas es <b>${Math.trunc(GrGrasasHombreSed)}gr</b>`;
         console.log(macronutrientesGr);
         break;

         case Deporteseleccionado == 'Deportista' && factorActividad == '3 horas semanales'  && Generoseleccionado =='hombre':
          macronutrientesGr = `Tu requerimiento de Carbohidratos es <b>${Math.trunc(GrChosHombreLeve)}gr</b>,<br>
          Tu requerimiento de Proteinas es<b> ${Math.trunc(GrProtHombreLeve)}gr</b>,<br>
          Tu requerimiento de Grasas es<b> ${Math.trunc(GrGrasasHombreLeve)}gr</b>`;
          console.log(macronutrientesGr);
          break;

          case Deporteseleccionado == 'Deportista' && factorActividad == '6 horas semanales'  && Generoseleccionado =='hombre':
            macronutrientesGr = `Tu requerimiento de Carbohidratos es <b>${Math.trunc(GrChosHombreMod)}gr</b>,<br>
            Tu requerimiento de Proteinas es <b>${Math.trunc(GrProtHombreMod)}gr</b>,<br>
            Tu requerimiento de Grasas es <b>${Math.trunc(GrGrasasHombreMod)}gr</b>`;
            console.log(macronutrientesGr);
            break;

            case Deporteseleccionado == 'Deportista' && factorActividad == '6 horas semanales'  && Generoseleccionado =='hombre':
              macronutrientesGr = `Tu requerimiento de Carbohidratos es <b>${Math.trunc(GrChosHombreInt)}gr</b>,<br>
              Tu requerimiento de Proteinas es <b>${Math.trunc(GrProtHombreInt)}gr</b>,<br>
              Tu requerimiento de Grasas es <b>${Math.trunc(GrGrasasHombreInt)}gr</b>`;
              console.log(macronutrientesGr);
              break;

        default:
          macronutrientesGr = " Verifica que hayas ingresado todos los datos !"

    } 

    document.getElementById("resultadoMacronut").innerHTML = macronutrientesGr;
    console.log(macronutrientesGr);

    }