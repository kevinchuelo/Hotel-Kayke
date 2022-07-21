//Cotizador de precios y reserva de habitacion en hotel
function cotizarReserva (){
let pregida = parseFloat(prompt("¿Que dia llegas(AÑO/M/D)?"))
let pregvuelta = parseFloat(prompt("¿Que dia te vas(AÑO/M/D)?"))
console.log (pregida);
console.log (pregvuelta);
let reservacreada = new nuevaReserva = pregida + pregvuelta;
return reservacreada;
 };


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

//FUNCIONES PARA GUARDAR DATOS DE RESERVAS EN EL HOTEL
//array donde se van a guardar los obj con las reservas.
let listaDeReservas = [
  { nombre: "Kevin", apellido: "Velazquez", fechaDeLlegada: '08 09 2022', fechaDeVuelta: '08 10 2022', personas: 1, tipodehabitacion: "personal" },
  { nombre: "Carlos", apellido: "Saez", fechaDeLlegada: '25 09 2022', fechaDeVuelta: '08 11 2022', personas: 4, tipodehabitacion: "familiar" },
  { nombre: "Ramon", apellido: "Perez", fechaDeLlegada: '10 10 2022', fechaDeVuelta: '20 10 2022', personas: 1, tipodehabitacion: "personal" }
];


// clase constructora para hacer reservas.
class Reserva {
  constructor(nombre, apellido, personas, tipodeHabitacion, fechaDeLlegada, fechadevuelta) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.personas = personas;
    this.tipodeHabitacion = tipodeHabitacion;
    this.fechaDeLlegada = fechaDeLlegada;
    this.fechaDeVuelta = fechadevuelta;


  }
}

const crearReserva = () => {
  let nombre = prompt("¿Cual es su nombre?");
  let apellido = prompt("¿Cual es su apellido?");
  let personas = prompt("¿Cuantas personas se hospedan?").parseInt;
  let tipodeHabitacion = prompt("¿Que habitacion desea?");
  let fechaDeLlegada = prompt("¿Que fecha llega?").parseFloat;
  let fechaDeVuelta = prompt("¿Hasta que fecha se hospeda?").parseFloat;

  let nuevaReserva = new Reserva(nombre, apellido, personas, tipodeHabitacion, fechaDeLlegada, fechaDeVuelta)
  listaDeReservas.push(nuevaReserva);
  return nuevaReserva;
};

//Boton para ver la lista de reservas hechas hecho com metodo de busqueda foreach
listaDeReservas.forEach (function verReservas (nombre, fechaDeLlegada, fechaDeVuelta) {
console.log (`La reserva fue hecha por ${nombre}, le fecha de llegada es ${fechaDeLlegada} y su fecha de vuelta es ${fechaDeVuelta}.`)
}); 
//Crear funcion para aplicarcela al metodo y luego poder asignarle esa funcion a un boton en la pagina

//Crear funcion y un metodo de filtrado para poder ver los dias disponibles que hay para rerservar.
  

//Crear funcion con metodo para buscar si su nombre cuenta con reservas
const search = listaDeReservas.find (
  (el)=> el == buscador
);
  // let buscador = prompt ("Cual es el nombre del que reservo?");
  let buscador = Kevin;
 
 















