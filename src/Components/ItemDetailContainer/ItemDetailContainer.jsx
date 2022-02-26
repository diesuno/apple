import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import DetalleProducto from '../ItemDetail/ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';


const ContenedorDetalladoItems = () => {

    const [detalleProducto, guardarDetalleProducto] = useState([]);
    const [cargador, guardarCargador] = useState(true);
    const {id} = useParams();

    
    useEffect(()=> {
            const database = getFirestore()
            const detalleProducto = doc(database,"items",id) 
            getDoc(detalleProducto)
            .then(respuesta => guardarDetalleProducto({id: respuesta.id, ...respuesta.data()}))
            .catch((error) => console.log(error))
            .finally(()=> guardarCargador(false)) 


    },[id]) 
 
 
 
 
    return (
        <>  
        {cargador ?
        <h2>Cargando...</h2>
        :
        <DetalleProducto detalle = {detalleProducto}/>    
        }
        
        </>



    )
};

export default ContenedorDetalladoItems;