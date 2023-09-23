// funcion para limitar la cantidad de numeros ingresados en los inputs
function limitarNumero(input, maxLength) {
  if (input.value.length > maxLength) {
    input.value = input.value.slice(0, maxLength);
    document.getElementById('errorMensajeTalla').textContent = 'Máximo 3 dígitos permitidos.';
    document.getElementById('errorMensajePeso').textContent = 'Máximo 3 dígitos permitidos.';
    document.getElementById('errorMensajeEdad').textContent = 'Máximo 3 dígitos permitidos.';
  } else {
    document.getElementById('errorMensajeTalla').textContent = '';
  }
};




const calculoGet = () =>{
  console.log('funcion get');

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
  
      const talla = document.getElementById("talla").value;
      console.log(talla);
      const peso = document.getElementById("peso").value;
      console.log(peso)
      const edad = document.getElementById("edad").value;
      console.log(edad);
      
       // Toma los datos ingresados en el factor de actividad
       const opcionesFactorAct = document.getElementsByName("factorActividad");
       let factorActividad = "";

       for (const opcion of opcionesFactorAct) {
         if (opcion.checked) {
          factorActividad = opcion.value;
           break; 
         }
       }
       console.log(factorActividad);

        // FORMULAS

        const formulaHombres = (66.5 + 13.75 *peso + 5.0 * talla - 6.78 *edad)
        const formulaMujeres = (655 + 9.56* peso + 1.85 * talla - 4.68 * edad)


       let resultadoGet = "";

  switch (true) {

      // Casos mujeres
      case Generoseleccionado == 'mujer' && factorActividad == "Menos de 3 horas semanales":
          resultadoGet  = `Tu gasto energético total es de ${Math.trunc((formulaMujeres)*1.2)} kcal`;
        break;
        
        case Generoseleccionado == 'mujer' && factorActividad == "3 Horas semanales":
          resultadoGet  = `Tu gasto energético total es de ${Math.trunc((formulaMujeres)*1.56)}  kcal`;
        break;

        case Generoseleccionado == 'mujer' && factorActividad == "6 Horas semanales":
          resultadoGet  = `Tu gasto energético total es de ${Math.trunc((formulaMujeres)*1.64)} kcal`;
        break;

        case Generoseleccionado == 'mujer' && factorActividad == "4-5 horas semanales":
          resultadoGet  = `Tu gasto energético total es de ${Math.trunc((formulaMujeres)*1.82)} kcal`;
        break;

      //   CASOS HOMBRES
        case Generoseleccionado == 'hombre' && factorActividad == "Menos de 3 horas semanales":
          resultadoGet  = `Tu gasto energético total es de ${Math.trunc((formulaHombres)*1.2)} kcal`;
        break;

        case Generoseleccionado == 'hombre' && factorActividad == "3 Horas semanales":
          resultadoGet  = `Tu gasto energético total es de ${Math.trunc((formulaHombres)*1.55)} kcal`;
        break;
        
        case Generoseleccionado == 'hombre' && factorActividad == "6 Horas semanales":
          resultadoGet  = `Tu gasto energético total es de ${Math.trunc((formulaHombres)*1.8)} kcal`;
        break;

        case Generoseleccionado == 'hombre' && factorActividad == "4-5 horas semanales":
          resultadoGet  = `Tu gasto energético total es de ${Math.trunc((formulaHombres)*2.1)} kcal`;
        break;
        
      default:
          resultadoGet = " Verifica que hayas ingresado todos los datos !"

}
// muestra el resultado en pantalla
document.getElementById("resultadoGet").innerHTML = resultadoGet;

}
