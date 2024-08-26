//Escribe un programa que obtenga el nombre del mes actual y lo muestre en la consola.
//El programa debe poder funcionar en cualquier fecha del año.
const date = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentMonth = monthNames[date.getMonth()];
console.log(currentMonth);