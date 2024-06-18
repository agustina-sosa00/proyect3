/* eslint-disable no-unused-vars */
// -> -> -> -> P A R A  R E G I S T E R <- <- <- <-
// name, email, birthday, nDni, username, password
export const validate = ({name, email, birthdate, nDni, username, password}) =>{
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /\d/;


    if(name.length < 3) errors.name = 'El nombre debe contener al menos 3 letras.'

    if(!emailRegex.test(email)) errors.email = 'El correo electronico debe contener @gmail.com.'

    if(!dateRegex.test(birthdate)) errors.birthdate = 'La fecha de nacimiento debe ser dd/mm/aaaa.'

    if(nDni.length < 8) errors.nDni = 'Documento de Identidad no valido.';

    if(!uppercaseRegex.test(username)) errors.username = 'El nombre de usuario debe contener una letra mayuscula.'

    if(!numberRegex.test(password) && !uppercaseRegex.test(password)) errors.username = 'La contraseña no es segura.'


    return errors;
}