import './ItemDetail.css';
import { ContadorItems } from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useCartContext } from "../../context/CartContext";


const DetalleProducto = ({detalle}) => {
   const [contador,guardarContador] = useState(0)
   const {agregarAlCarrito} = useCartContext ()
    function onAdd (cant){
        agregarAlCarrito({...detalle,cantidad: cant})
        guardarContador(cant)
    }
    
    return <div>
                <div className='Container border border-2'>
                    <div className='row m-5'>
                        <div className='col-6'>
                            <img className='size' alt="Producto" src={detalle.img}></img>
                        </div>
                        <div className='col-6 info'>
                            <h1>{detalle.nombre}</h1>
                            <p>{detalle.descripcion}</p>
                            {
                    contador === 0 ?
                        <ContadorItems onAdd={onAdd} initial={1} stock={detalle.stock} />                    
                    : 
                        <>
                            <Link to='/cart'>
                                <button className="btn terminarCompra btn-outline-danger">Terminar compra</button>
                            </Link> 
                            
                            <Link to='/'>
                                <button className="btn seguirComprando btn-outline-success">Seguir Comprando</button>
                            </Link>
                        </>
                }

                        </div>
                    </div>
                </div>
            </div>;
};

export default DetalleProducto;