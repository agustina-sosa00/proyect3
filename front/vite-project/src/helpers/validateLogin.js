export const validate = ({username, password}) => {
    const errors = {};
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /\d/;



    if(!uppercaseRegex.test(username)) errors.username = 'El nombre de usuario debe contener una letra mayuscula.'

    if(!numberRegex.test(password) && !uppercaseRegex.test(password)) errors.username = 'La contraseña no es segura.'

    return errors;
}