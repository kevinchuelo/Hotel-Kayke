//Cotizador de precios y reserva de habitacion en hotel

//Calculador de dias
// let ida = prompt("¿Que dia llegas(M/D/AÑO)?");
// let vuelta = prompt ("¿Que dia te vas(M/D/AÑO)?");

let fechaida = new Date ('12 12 2010');
let fechavuelta = new Date ('12 12 2012');

console.log (fechaida);
console.log (fechavuelta);

const milisegundos = 24 * 60 * 60 * 1000;
console.log (milisegundos);

let ida = Math.round (fechaida / milisegundos);
let vuelta = Math.round (fechavuelta / milisegundos);
let diferencia = Math.abs( ida - vuelta);

console.log (diferencia);

let registroReserva = new reserva (nombre, apellido, fechaDeLlegada, fechadevuelta, personas, tipodehabitacion) {
    this.nombre = nombre
    this.apellido=apellido
    this.fechaDeLlegada=fechaDeLlegada
    this.fechadevuelta=fechadevuelta
    this.personas = personas
    this.tipodehabitacion=tipodehabitacion
};

// Agregar un ARRAY con objetos de las reservas 

let reservas = [
    {nombre: "Kevin", apellido: "Velazquez", fechaDeLlegada: '08 09 2022', fechadevuelta: '08 10 2022', personas: 1, tipodehabitacion: "personal" }
]




