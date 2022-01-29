
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import getProducts from '../../Helpers/getProducts';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {

    const [DetalleProducto, setDetalleProducto] = useState([]);
    const {id} = useParams();
    console.log(DetalleProducto);

    useEffect(()=> {

        if (id) {
            
            getProducts()
            .then(productos => setDetalleProducto (productos.find( prod => prod.id === id)))
            .catch((error) => console.log(error));
        }else{
            getProducts()
            .then(products => setDetalleProducto (products))
            .catch((error) => console.log(error));
            
        }
    },[id]) 

    //console.log(id);
    //console.log(DetalleProducto);
    return <div>
        <ItemDetail detalle = {DetalleProducto}/>
    </div>;
};

export default ItemDetailContainer;