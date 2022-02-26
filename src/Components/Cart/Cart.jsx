import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import "./cart.css"
import ProductoCarro from '../ItemCart/ItemCart';
import PrecioTotal from '../TotalPrice/TotalPrice';




const Carrito = () => {
  const {listaDeCarro} = useCartContext([])
  



 

  return <div>
     
     
      {listaDeCarro.length !== 0 ? 
     <>

     <ProductoCarro/>      
     <PrecioTotal/>
        

    
        
        </>: 
        <div>
          
          
          <h2 className='border border-2 vacio'  >No hay productos</h2>
         
         
          <Link to="/">
            
            <button className="btn btn-outline-primary">Seguir comprando</button>
          </Link>
        </div>
        
      }    
  </div>;
}

export default Carrito;
