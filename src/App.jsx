
import {BrowserRouter, Routes, Route} from "react-router-dom"
import  NavBar  from "./Components/NavBar/NavBar"
import './App.css';
import ListaContenedoraProductos from './Components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrito from "./Components/Cart/Cart"
import ContenedorDetalladoItems from "./Components/ItemDetailContainer/ItemDetailContainer"
import ProveedorDeContenidosDelCarro from "./context/CartContext";
import Formulario from "./Components/Form/Form";


function App() {



  return (
    
    <BrowserRouter>
      <ProveedorDeContenidosDelCarro>
            <div className="App " >
              <NavBar/>
              <Routes>
                <Route exact path='/' element={ <ListaContenedoraProductos />}/>
                <Route exact path='/categoria/:categoria' element={ <ListaContenedoraProductos />}/>
                <Route exact path='/detalle/:id' element={ <ContenedorDetalladoItems />}/>
                <Route exact path='/cart' element={ <Carrito />}/>
                <Route exact path='/form' element={ <Formulario />}/>

              </Routes>
           
            </div>
      </ProveedorDeContenidosDelCarro>  
  </BrowserRouter>
  );
}

export default App;
