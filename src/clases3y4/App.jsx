import logo from './logo.svg';
import './App.css';

function App() {

// SUGAR SYNTAX


 // const condition = false
/*   let resultado = null
  if(condition){
    resultado = "Verdadero"
  }else{
    resultado = "Falso"
  }
  console.log(`el resultado es ${resultado}`);
 */
/* 
  console.log(`el resultado es ${condition ? 'verdadero' : 'Falso' }`); */



  // SPREAD OPERATOR



/* let a = 'a'
const array = ['b','c', 'd']

let newArray = [array, a]
console.log(newArray); */

// PROPIEDADES DINAMICAS


/* const apellido = 'Diaz'
const obj = {
  nombre: 'fede',
  edad: 35,
  ['id: ' + apellido]: 'Osandon'

} 
console.log(obj);
*/



/* const obj = {
  nombre: 'fede',
  apellido: 'Diaz',
 

} */
//let nombre = obj.nombre
//let apellido = obj.apellido



//CON SUGAR SYNTAX
// DESTRUCTURING
//const {nombre= nombre, apellido=apellido} = obj
/* const {nombre, apellido} = obj // SI EL CONTENIDO DE LA VARIABLE TIENE EL MISMO NOMBRE NO HACE FALTA REPETIR LOS CAMPOS

console.log(nombre + ' ' + apellido); */




/// DEEP MATCHING
/* const obj = {
  nombre: 'fede',
  apellido: 'Diaz',
 

}
const {nombre: primerNombre} = obj

console.log(primerNombre); */


///Asignacion en desastructuracion

/* const obj = {
  nombre: 'fede',
  apellido: 'Diaz',
  edad: 30
 

}
const {nombre: primerNombre, edad =35} = obj

console.log(edad);
 */


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
