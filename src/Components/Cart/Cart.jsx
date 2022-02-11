import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const Cart = () => {
  const { cartList, eliminarProducto , vaciarCarrito,total } = useCartContext()

  return <div>
      {cartList.length !== 0 ? 
     <>
      {cartList.map((prod) => <div className='border border-2' key={prod.nombre}>
        <img src={prod.img} alt="" width={50} /> 
        
        <h4>{prod.nombre}</h4> <h5>$ {(prod.valor) }</h5>  <h6>Cantidad {prod.cantidad} </h6>
        <br />
        <button className="btn borrarUno btn-outline-primary" onClick={() => eliminarProducto(prod.nombre)}>X</button> 
        <br />
        </div> ) }
        
        <br />
        <div>
        <h3>{`TOTAL  $ ${total()}`}</h3>
        </div>
        
        <button  className="btn btn-outline-primary" onClick={vaciarCarrito} >Vaciar Carrito</button>
        </>: 
        <div>
          
          <h4 className='border border-2' >No hay productos seleccionados</h4>
         
          <Link to="/">
            <button className="btn btn-outline-primary">Seguir comprando</button>
          </Link>
        </div>
        
      }    
  </div>;
}

export default Cart;
