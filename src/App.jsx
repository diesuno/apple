
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {



  return (
    <div className="App">
      <NavBar>
          <ItemListContainer tit="Bienvenidos a este E-Commerce" />
          <ItemListContainer tit="Bienvenidos a este E-Commerce" />    
        </NavBar>

      
    </div>
  );
}

export default App;
