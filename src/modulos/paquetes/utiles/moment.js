const moment = require('moment');
let ahora = moment();//fecha de hoy
console.log(ahora.toString())//hoy
console.log(ahora.format('YYYY/MM/DD - HH:mm'))//cambiar formato de fecha