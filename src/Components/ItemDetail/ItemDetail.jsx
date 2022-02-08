import React from 'react';
import './ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useCartContext } from "../../context/CartContext";


const ItemDetail = ({detalle}) => {
   const [contador,setContador] = useState(0)
   const {agregarAlCarrito} = useCartContext ()
    function onAdd (cant){
        agregarAlCarrito({...detalle,cantidad: cant})
        setContador(cant)
    }
    
    return <div>
                <div className='Container'>
                    <div className='row m-5'>
                        <div className='col-6'>
                            <img className='size' src={detalle.img}></img>
                        </div>
                        <div className='col-6 info'>
                            <h1>{detalle.nombre}</h1>
                            <p>{detalle.descripcion}</p>
                            {
                    contador === 0 ?
                        <ItemCount onAdd={onAdd} initial={1} stock={detalle.stock} />                    
                    : 
                        <>
                            <Link to='/cart'>
                                <button className="btn btn-outline-primary">Terminar compra</button>
                            </Link>
                            <Link to='/'>
                                <button className="btn btn-outline-primary">Seguir Comprando</button>
                            </Link>
                        </>
                }

                        </div>
                    </div>
                </div>
            </div>;
};

export default ItemDetail;