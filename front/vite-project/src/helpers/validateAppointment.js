 const validate = ({date, time}) =>{
    const errors = {}
    if(!date)errors.date = 'Debe ingresar una fecha'
    if(!time) errors.time = 'Debe ingrear un horario'

    return errors;
}

export default validate