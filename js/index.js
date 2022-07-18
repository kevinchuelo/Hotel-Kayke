//Cotizador de precios y reserva de habitacion en hotel

let pregida = parseFloat(prompt("¿Que dia llegas(AÑO/M/D)?"));
let pregvuelta = parseFloat(prompt ("¿Que dia te vas(AÑO/M/D)?"));
console.log (pregida);
console.log (pregvuelta);
//Calculador de dias
let fechaida = Date (pregida);
let fechavuelta = Date (pregvuelta);

console.log (fechaida);
console.log (fechavuelta);

const milisegundos = 24 * 60 * 60 * 1000;
console.log (milisegundos);

let ida = Math.round (fechaida / milisegundos);
let vuelta = Math.round (fechavuelta / milisegundos);
let diferencia = Math.abs( ida - vuelta);

alert (diferencia);

// class registroReserva = 
// constructor (nombre, apellido, fechaDeLlegada, fechadevuelta, personas, tipodehabitacion) {
//     this.nombre = nombre
//     this.apellido = apellido
//     this.personas = personas
//     this.tipodehabitacion = tipodehabitacion
//     this.fechaDeLlegada = fechaDeLlegada
//     this.fechadevuelta = fechadevuelta
// };

//array donde se van a guardar los obj con las reservas.
let listaDeReservas = [
    {nombre: "Kevin", apellido: "Velazquez", fechaDeLlegada: '08 09 2022', fechadevuelta: '08 10 2022', personas: 1, tipodehabitacion: "personal" },

];

// clase constructora para hacer reservas.
function constructorreserva (nombre, apellido, personas, tipodeHabitacion, fechaDeLlegada, fechadevuelta) {
    this.nombre = prompt("¿Cual es su nombre?");
    this.apellido = prompt("¿Cual es su apellido?");
    this.personas = prompt("¿Cuantas personas se hospedan?");
    this.tipodeHabitacion = prompt("¿Que habitacion desea?");
    this.fechaDeLlegada = prompt("¿Que fecha llega?");
    this.fechadevuelta = prompt("¿Hasta que fecha se hospeda?");
// nose si va esta constante 
    // const reserva1 = new crearReserva(nombre, apellido, personas, tipodeHabitacion, fechaDeLlegada, fechadevuelta);
    // return reserva1;}
    return constructorreserva;
}
console.log (constructorreserva)
//Funcion que agrega reservas

function agregarReserva (reserva) {
  listaDeReservas.push (constructorreserva);  
  console.log (listaDeReservas);
}










