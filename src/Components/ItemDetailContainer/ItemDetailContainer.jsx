import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';


const ItemDetailContainer = () => {

    const [detalleProducto, setDetalleProducto] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    
    useEffect(()=> {
            const database = getFirestore()
            const detalleProducto = doc(database,"items",id) 
            getDoc(detalleProducto)
            .then(respuesta => setDetalleProducto({id: respuesta.id, ...respuesta.data()}))
            .catch((error) => console.log(error))
            .finally(()=> setLoading(false)) 


    },[id]) 
 
 
 
 
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