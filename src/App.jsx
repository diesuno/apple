
import {BrowserRouter, Routes, Route} from "react-router-dom"
import  NavBar  from "./Components/NavBar/NavBar"
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./Components/Cart/Cart"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import CartContextProvider from "./context/CartContext";
import Formulario from "./Components/Form/Form";


function App() {



  return (
    
    <BrowserRouter>
      <CartContextProvider>
            <div className="App " >
              <NavBar/>
              <Routes>
                <Route exact path='/' element={ <ItemListContainer />}/>
                <Route exact path='/categoria/:categoria' element={ <ItemListContainer />}/>
                <Route exact path='/detalle/:id' element={ <ItemDetailContainer />}/>
                <Route exact path='/cart' element={ <Cart />}/>
                <Route exact path='/form' element={ <Formulario />}/>

              </Routes>
           
            </div>
      </CartContextProvider>  
  </BrowserRouter>
  );
}

export default App;
