import React from 'react';
import { useCartContext } from '../../context/CartContext';

const Cart = () => {
  const { cartList, vaciarCarrito } = useCartContext()
    
  return <div>
      { cartList.map(produ => <li>{produ.name} precio: {produ.price} cantidad: {produ.cantidad}</li> ) }
        <button  className="btn btn-outline-primary" onClick={vaciarCarrito} >Vaciar Carrito</button>
  </div>;
}

export default Cart;
