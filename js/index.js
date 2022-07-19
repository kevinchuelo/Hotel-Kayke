//Cotizador de precios y reserva de habitacion en hotel

let pregida = parseFloat(prompt("¿Que dia llegas(AÑO/M/D)?"));
let pregvuelta = parseFloat(prompt("¿Que dia te vas(AÑO/M/D)?"));
console.log(pregida);
console.log(pregvuelta);
//Calculador de dias
let fechaida = Date(pregida);
let fechavuelta = Date(pregvuelta);

console.log(fechaida);
console.log(fechavuelta);

const milisegundos = 24 * 60 * 60 * 1000;
console.log(milisegundos);

let ida = Math.round(fechaida / milisegundos);
let vuelta = Math.round(fechavuelta / milisegundos);
let diferencia = Math.abs(ida - vuelta);

alert(diferencia);


//array donde se van a guardar los obj con las reservas.
let listaDeReservas = [
  { nombre: "Kevin", apellido: "Velazquez", fechaDeLlegada: '08 09 2022', fechadevuelta: '08 10 2022', personas: 1, tipodehabitacion: "personal" },
];
console.log(listaDeReservas);


// clase constructora para hacer reservas.
class Reserva {
  constructor(nombre, apellido, personas, tipodeHabitacion, fechaDeLlegada, fechadevuelta) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.personas = personas;
    this.tipodeHabitacion = tipodeHabitacion;
    this.fechaDeLlegada = fechaDeLlegada;
    this.fechadevuelta = fechadevuelta;


  }
}

const crearReserva = () => {
  let nombre = prompt("¿Cual es su nombre?");
  let apellido = prompt("¿Cual es su apellido?");
  let personas = prompt("¿Cuantas personas se hospedan?");
  let tipodeHabitacion = prompt("¿Que habitacion desea?");
  let fechaDeLlegada = prompt("¿Que fecha llega?");
  let fechadevuelta = prompt("¿Hasta que fecha se hospeda?");

  let nuevaReserva = new Reserva(nombre, apellido, personas, tipodeHabitacion, fechaDeLlegada, fechadevuelta)
  listaDeReservas.push(nuevaReserva);
  return nuevaReserva;
};
console.log(listaDeReservas);











