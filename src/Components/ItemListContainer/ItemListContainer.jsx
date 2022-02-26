import {useState, useEffect} from 'react';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ListadoItems from '../ItemList/ItemList';







const ListaContenedoraProductos = () => {
    const [productos, guardarListadoProductos] = useState([]);
    const [cargador, guardarCargador] = useState(true)
    const {categoria} = useParams()

        useEffect(()=> {
            const baseDeDatos = getFirestore()
            
            const consultaDeColecciones = collection(baseDeDatos, "items")

            const consultaFirebase = ! categoria ? 
            consultaDeColecciones                
             : 
            query(consultaDeColecciones, 
                where('categoria', '==', categoria)                
            )  

                getDocs(consultaFirebase)
                .then(respuesta => guardarListadoProductos( respuesta.docs.map(producto => ( { id: producto.id, ...producto.data() } )  ) ))
                .catch((err) => console.log(err))
                .finally(() => guardarCargador(false))            
                        
            }, [categoria])


          
    return (
        <div className='container'>
            {
                cargador ? 
                <h2>Cargando...</h2>
                :
                
                <ListadoItems listado={productos}/> 
            }
            
        </div>
    );
};

export default ListaContenedoraProductos