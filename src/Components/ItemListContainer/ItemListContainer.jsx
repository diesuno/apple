import React, {useState, useEffect} from 'react';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';







const ItemListContainer = () => {
    const [products, setListadoProductos] = useState([]);
    const [loading, setloading] = useState(true)
    const {categoria} = useParams()

        useEffect(()=> {
            const database = getFirestore()
            
            const queryCollection = collection(database, "items")

            const queryF = ! categoria ? 
            queryCollection                
             : 
            query(queryCollection, 
                where('categoria', '==', categoria)                
            )  

                getDocs(queryF)
                .then(resp => setListadoProductos( resp.docs.map(prod => ( { id: prod.id, ...prod.data() } )  ) ))
                .catch((err) => console.log(err))
                .finally(() => setloading(false))            
                        
            }, [categoria])


          
    return (
        <div className='container'>
            {
                loading ? 
                <h2>Cargando...</h2>
                :
                
                <ItemList listado={products}/> 
            }
            
        </div>
    );
};

export default ItemListContainer