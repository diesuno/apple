
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import getProducts from '../../Helpers/getProducts';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';


const ItemDetailContainer = () => {

    const [detalleProducto, setDetalleProducto] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    //console.log(DetalleProducto);

    useEffect(()=> {
            const database = getFirestore()
            const detalleProducto = doc(database,"items",id) 
            getDoc(detalleProducto)
            .then(respuesta => setDetalleProducto({id: respuesta.id, ...respuesta.data()}))
            .catch((error) => console.log(error))
            .finally(()=> setLoading(false)) 


       /*  if (id) {
            
            getProducts()
            .then(productos => setDetalleProducto (productos.find( prod => prod.id === id)))
            .catch((error) => console.log(error))
            .finally(()=> setLoading(false)) 
        }else{
            getProducts()
            .then(products => setDetalleProducto (products))
            .catch((error) => console.log(error))
            .finally(()=> setLoading(false)) 
            
        } */
    },[id]) 

    //console.log(id);
    //console.log(DetalleProducto);
    return (
        <>  
        {loading ?
        <h2>Cargando...</h2>
        :
        <ItemDetail detalle = {detalleProducto}/>    
        }
        
        </>



    )
};

export default ItemDetailContainer;