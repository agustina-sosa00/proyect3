/* eslint-disable no-unused-vars */
 const validate =  ({date, time})=>{
    const errors = {}

   // VALIDACIÓN FECHA PARA TURNO
  if (!date) {
    errors.date = "Debe ingresar una fecha para el turno";
  } else {
    const currentDate = new Date();
    const selectedDate = new Date(date);

    if (selectedDate < currentDate) {
      errors.date =
        "La fecha seleccionada no puede ser anterior a la fecha actual";
    }
  }

  // VALIDACIÓN HORA PARA TURNO
  if (!time) {
    errors.time = "Debe ingresar una hora para el turno HH:MM";
  } else {
    const timeRegex = /^(?:2[0-3]|[01][0-9]):[0-5][0-9]$/; // Formato HH:MM (24 horas)
    if (!timeRegex.test(time)) {
      errors.time = "Formato de hora inválido. Utilice HH:MM (24 horas)";
    }
  }
    return errors;
}

export default validate;