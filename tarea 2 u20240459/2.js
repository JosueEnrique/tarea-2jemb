//Crea un programa en JavaScript que utilice el objeto Date para obtener el día de la semana actual y lo muestre en la consola en un formato corto de tres letras, donde:
//'Sun' representa a domingo
//'Mon' representa a lunes
//'Tue' representa a martes
//'Wed' representa a miércoles
//'Thu' representa a jueves
//'Fri' representa a viernes
//'Sat' representa a sábado

const fechaActual = new Date();
const diaSemana = fechaActual.getDay();
const diasSemanaCorto = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
console.log(diasSemanaCorto[diaSemana]);