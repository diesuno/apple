import React from 'react';
import { useCartContext } from '../../context/CartContext';


const Cart = () => {
  const { cartList, eliminarProducto , vaciarCarrito } = useCartContext()

  return <div>
      {
      /* cartList === [] ? 
      <h1>No hay productos seleccionados</h1>
      : */
      
         
      cartList.map((prod) => <div key={prod.nombre}>
        <img src={prod.img} alt="" width={50} /> 
        <h7>{prod.nombre} precio: $ {prod.valor} cantidad: {prod.cantidad}</h7>
        <button className="btn borrarUno btn-outline-primary" onClick={() => eliminarProducto(prod.nombre)}>X</button> 
        </div> ) }
        <button  className="btn btn-outline-primary" onClick={vaciarCarrito} >Vaciar Carrito</button>
  </div>;
}

export default Cart;
