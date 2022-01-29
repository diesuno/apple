import React from 'react';
import './ItemDetail.css';
import { Card, Button } from 'react-bootstrap';
import { ItemCount } from '../ItemCount/ItemCount';


const ItemDetail = ({detalle}) => {
    //console.log(detalle);
    function onAdd (cant){
        console.log(cant);
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
                            <ItemCount initial = {1} stock = {detalle.stock} onAdd={onAdd} /> 
                        </div>
                    </div>
                </div>
            </div>;
};

export default ItemDetail;