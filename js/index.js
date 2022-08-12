//Libreria luxon
let dataTime = luxon.DateTime;


//Cotizador de precios y reserva de habitacion en hotel
//Evento que me llama esta funcion con un click
//Variable que llama al form donde aplico la funcion
let btncrearreserva = document.querySelector ("#btnForm");
//evento que crear la reserva para calcular los dias
let cajaNombre = document.querySelector ("#cajaNombre").value
let cajaApellido = document.querySelector ("#cajaApellido").value
let cajaDeHabitacion = document.querySelector ("#cajaDeHabitacion").value
btncrearreserva.addEventListener ( 'click', () => {
let pregida = document.querySelector ("#check-in").value
let pregvuelta = document.querySelector ("#check-out").value
const cantidaddepersonas = document.querySelector ("#personas").value;
//Calculador de dias
let fechaida = Date.parse(pregida);
let fechavuelta = Date.parse(pregvuelta);
const milisegundos = 86400000;
let diferenciadias = Math.abs((fechaida - fechavuelta) / milisegundos);
let completarform = document.querySelector ("#formulario")
// const p = document.createElement("");
// p.setAttribute("id","extensionForm");
// p.innerText(`Los dias que te vas a quedar en el hotel son ${diferenciadias} y la cantidad de personas que se hospedan son ${cantidaddepersonas}`);
// document.body.completarform.appendChild(p);

Toastify (
  {text:`Los dias que te vas a quedar en el hotel son ${diferenciadias} y la cantidad de personas que se hospedan son ${cantidaddepersonas}`,
  duration:5000 ,
  position: "center",
  style:{background: "#84b6f4",},
}).showToast();
return diferenciadias, cantidaddepersonas});
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

function crearReserva (){
  let nombre = cajaNombre;
  let apellido = cajaApellido;
  let personas = cantidaddepersonas;
  let tipodeHabitacion = cajaDeHabitacion;
  let fechaDeLlegada = pregida;
  let fechaDeVuelta = pregvuelta;

  let nuevaReserva = new Reserva(nombre, apellido, personas, tipodeHabitacion, fechaDeLlegada, fechaDeVuelta)
  listaDeReservas.push(nuevaReserva); 
 return nuevaReserva;
};
 localStorage.setItem ("reservas", JSON.stringify(listaDeReservas))
//Boton para ver la lista de reservas hechas hecho com metodo de busqueda foreach
// listaDeReservas.forEach (function verReservas (nombre, fechaDeLlegada, fechaDeVuelta) {
// Toastify({ text:`La reserva fue hecha por ${nombre}, le fecha de llegada es ${fechaDeLlegada} y su fecha de vuelta es ${fechaDeVuelta}.`,
// duration: 5000,
// position: "center",
// }).showToast(); });

//Crear funcion para aplicarcela al metodo y luego poder asignarle esa funcion a un boton en la pagina

//Crear funcion y un metodo de filtrado para poder ver los dias disponibles que hay para rerservar.
  
// let buscador = prompt ("Cual es el nombre del que reservo?");
  // let buscador = "Kevin";
  
//Crear funcion con metodo para buscar si su nombre cuenta con reservas
// const search = listaDeReservas.find (
//   (el)=> el.nombre == buscador
// );
// console.log (search)


 
 















