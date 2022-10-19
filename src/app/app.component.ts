import { Component, ɵɵDirectiveDeclaration } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ts-intro';

  //resultado: number = tiposBasicos();
  //resultado: number = arrObjInterface();
  //resultado: number = funciones();
  //resultado: number = tareaTipado();
  //resultado: number = desestructuracionBasica();
  //resultado: number = desestructuracionFuncion();
  //resultado: number = importExport();
  //resultado: number = clases();
  //resultado: number = genericos();
  //resultado: number = decoradores();
  resultado: number = prueba();
}

export function tiposBasicos(): number{
  console.log("01-tipos-basicos");

  let nombre:string;
  let hp:number | string;
  let estaVivo:boolean;

  nombre = 'Horacio';
  hp = "NULL";
  estaVivo = true;

  console.log(nombre, hp, estaVivo);

  return 1;
}

export function arrObjInterface(): number{
  console.log("02-arr-obj-interface");

  interface Personaje{
    nombre:string,
    hp:number,
    habilidades: string[],
    puebloNatal?: string
  }

  let habilidades:string[];
  const personaje: Personaje = {
    nombre: 'Horacio',
    hp: 95,
    habilidades: ['Bash', 'Counter', 'Healing']
  }

  habilidades = ['Bash', 'Counter', 'Healing'];
  habilidades.push('Other');

  personaje.puebloNatal = "Mx";

  console.log(habilidades);
  console.table(personaje);
  console.log(personaje.puebloNatal);
  return 1;
}

export function funciones(): number{
  console.log("03-funciones");

  const resultado = sumar(5, 5);
  console.log(resultado);
  const resultado2 = multiplicar(5,0,10);
  console.log(resultado2);

  const nuevoPersonaje:PersonajeLOR = {
    nombre: 'Horacio',
    pv: 80,
    mostrarPv(){
      console.log("Los puntos de vida son: "+this.pv);
    }
  }

  curar(nuevoPersonaje,15);
  nuevoPersonaje.mostrarPv();

  return 1;
}

function sumar(a:number, b:number): number{
  return a+b;
}

function multiplicar(numero:number, otroNumero?: number, base:number=2):number{
  return numero * base;
}

const sumarFlecha = (a:number,b:number): number => {
  return a+b;
}

interface PersonajeLOR{
  nombre:string,
  pv:number,
  mostrarPv: () => void
}

function curar(personaje:PersonajeLOR, curarX:number):void{

  personaje.pv += curarX;

  console.log(personaje);

}

interface Direccion{
  calle:string,
  pais:string,
  ciudad:string
}
interface SuperHeroe{
  nombre:string,
  edad:number,
  direccion:Direccion,
  mostrarDireccion: () => string;
}

export function tareaTipado(){
  console.log("04-tarea-tipado");

  const superHeroe:SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion:{
      calle: 'Main St',
      pais: 'USA',
      ciudad: 'NY'
    },
    mostrarDireccion(){
      return this.nombre + ', ' + this.direccion.ciudad;
    }
  }

  const direccion = superHeroe.mostrarDireccion();
  console.log(direccion);

  return 1;
}

interface Reproductor{
  volumen:number,
  segundo:number,
  cancion:string,
  detalles:Detalles
}

interface Detalles{
  autor:string,
  anio:number
}

export function desestructuracionBasica(){
  console.log("05-desestructuracion-basica");

  const reproductor:Reproductor = {
    volumen:90,
    segundo:36,
    cancion:'Mess',
    detalles:{
      autor: 'Ed Sheeran',
      anio: 1975
    }
  }

  // Desestructuración de objeto
  const {volumen, segundo, cancion, detalles} = reproductor;
  const {autor} = detalles;

  console.log('El volumen actual es: ', volumen);
  console.log('El segundo actual es: ', segundo);
  console.log('La canción actual es: ', cancion);
  console.log('El autor es: ', autor);

  const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
  const [p1,p2,p3] = dbz;

  console.log('Personaje 1:',p1);
  console.log('Personaje 2:',p2);
  console.log('Personaje 3:',p3);

  return 1;
}

export interface Producto{
  desc: string,
  precio:number
}

export function calculaISV( productos: Producto[]):[number, number]{
  let total = 0;

  productos.forEach(({precio})=>{
    total += precio;
  })

  return [total, total * 0.15];
}

export function desestructuracionFuncion(){
  console.log('06-desestructuracion-funcion');

  const telefono: Producto = {
    desc: 'Nokia',
    precio: 150
  }

  const tableta: Producto = {
    desc: 'ipadAir',
    precio: 350
  }

  const articulos = [telefono,tableta];

  const [total,isv] = calculaISV(articulos);

  console.log('Total:',total);
  console.log('ISV',isv);

  return 1;
}

// import { Producto } from './ejercicios/06-desestructuracion-funcion';
// import { Producto, calculaISV} from '';

export function importExport(){
  console.log('07-import-export');

  const carritoCompras: Producto[] = [
    {
      desc:'Telefono 1',
      precio:100
    },
    {
      desc:'Telefono 2',
      precio:200
    }
  ];

  const [total, isv] = calculaISV( carritoCompras );

  console.log('Total:',total);
  console.log('ISV',isv);

  return 1;
}


// clases
class Heroe{
  public alterEgo:string;
  public edad: number;
  public nombreReal: number;

  constructor(){
    this.alterEgo = "alter";
    this.edad = 47;
    this.nombreReal = 10;
  }
}

export function clases(){
  console.log('Prueba');

  const ironman = new Heroe();
  console.log(ironman);

  const miProducto = new ProductoLiquido(1,1);
  console.log(miProducto);
  return 1;
}

class ProductoNormal{
  constructor(
    public idProd: number,
    public descrip: string,
    public idCategoria: number
  ){}
}

class ProductoLiquido extends ProductoNormal{

  constructor(
    public unidadLiquido: number,
    public conversionLiquido: number
  ){
    super(1, 'Manzanita', 2);
  }
}

// Genericos
export function genericos(){
  console.log("prueba genericos");

  let soyString = queTipoSoy("Hola mundo");
  let soyNumero = queTipoSoy(100);

  console.log(soyString);
  console.log(soyNumero);
  return 1;
}

function queTipoSoy<T>(argumento:T){
  return argumento;
}

// Decoradores de clase
export function decoradores(){
  console.log("Prueba decoradores de clase");

  const miSc = new MiSuperClase();
  miSc.imprimir();

  return 1;
}

class MiSuperClase{
  public miPropiedad:string = 'ABCD';

  imprimir(){
    console.log('Imprimir resultado');
    const bug = new BugReport("Needs dark mode");
    console.log(bug);
    console.log(bug.title); // Prints "Needs dark mode"
    console.log(bug.type); // Prints "report"
      }
}

// del sitio de decoradores
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
    reportingURL = "http://www...";
  };
}
 
@reportableClassDecorator
class BugReport {
  type = "report";
  title: string;
 
  constructor(t: string) {
    this.title = t;
  }
}
 
 
// Note that the decorator _does not_ change the TypeScript type
// and so the new property `reportingURL` is not known
// to the type system:
//bug.reportingURL;

// CURSO ENCADENAMIENTOS
export function prueba(){
  console.log("prueba de encadenamiento");

  imprimeHijos(pasajero1);
  return 1;
}

interface Pasajero{
  nombre:string,
  hijos?: string[]
}

const pasajero1: Pasajero = {
  nombre:'Fernando'
}

const pasajero2:Pasajero = {
  nombre:'Melisa',
  hijos:['Natalia', 'Gabriel']
}

function imprimeHijos (pasajero: Pasajero):void{
  const cuantosHijos = pasajero.hijos?.length || 0;

  console.log(cuantosHijos);
}