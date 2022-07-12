//Cotizador de precios y reserva de habitacion en hotel

//Calculador de dias
let fechaida = Date (prompt("¿Que dia llegas(M/D/AÑO)?"));
let fechavuelta = Date(prompt ("¿Que dia te vas(M/D/AÑO)?"));

// let fechaida = new Date (fechadeida);
// let fechavuelta = new Date (fechadevuelta);

console.log (fechaida);
console.log (fechavuelta);

const milisegundos = 24 * 60 * 60 * 1000;
console.log (milisegundos);

let ida = Math.round (fechaida / milisegundos);
let vuelta = Math.round (fechavuelta / milisegundos);
let diferencia = Math.abs( ida - vuelta);

console.log (diferencia);

// class registroReserva = 
// constructor (nombre, apellido, fechaDeLlegada, fechadevuelta, personas, tipodehabitacion) {
//     this.nombre = nombre
//     this.apellido = apellido
//     this.personas = personas
//     this.tipodehabitacion = tipodehabitacion
//     this.fechaDeLlegada = fechaDeLlegada
//     this.fechadevuelta = fechadevuelta
// };

const crearReserva = () => {
    let nombre = prompt("¿Cual es su nombre?");
    let apellido = prompt("¿Cual es su apellido?");
    let personas= prompt("¿Cuantas personas se hospedan?");
    let tipodeHabitacion= prompt("¿Que habitacion desea?");
    let fechaDeLlegada = prompt("¿Que fecha llega?");
    let fechadevuelta= prompt("¿Hasta que fecha se hospeda?");

    const reserva = new crearReserva (nombre, apellido, personas, tipodeHabitacion, fechaDeLlegada, fechadevuelta );
    return reserva;
}

// Agregar un ARRAY con objetos de las reservas 

let listaDeReservas = [
    {nombre: "Kevin", apellido: "Velazquez", fechaDeLlegada: '08 09 2022', fechadevuelta: '08 10 2022', personas: 1, tipodehabitacion: "personal" },

];
reservas.push (reserva);




