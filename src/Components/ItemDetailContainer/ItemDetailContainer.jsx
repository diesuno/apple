
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import getProducts from '../../Helpers/getProducts';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {

    const [DetalleProducto, setDetalleProducto] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    console.log(DetalleProducto);

    useEffect(()=> {

        if (id) {
            
            getProducts()
            .then(productos => setDetalleProducto (productos.find( prod => prod.id === id)))
            .catch((error) => console.log(error))
            .finally(()=> setLoading(false)) 
        }else{
            getProducts()
            .then(products => setDetalleProducto (products))
            .catch((error) => console.log(error))
            .finally(()=> setLoading(false)) 
            
        }
    },[id]) 

    //console.log(id);
    //console.log(DetalleProducto);
    return (
        <>  
        {loading ?
        <h2>Cargando...</h2>
        :
        <ItemDetail detalle = {DetalleProducto}/>    
        }
        
        </>



    )
};

export default ItemDetailContainer;