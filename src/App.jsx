import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/NavBar/ItemListContainer/ItemListContainer';

function App() {



  return (
    <div className="App">
      <NavBar />

      <ItemListContainer tit="Bienvenidos a este E-Commerce" />   
    </div>
  );
}

export default App;
