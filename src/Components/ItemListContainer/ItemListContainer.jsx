import React, {useState, useEffect} from 'react';
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import getProducts from '../../Helpers/getProducts';
import ItemList from '../ItemList/ItemList';






const ItemListContainer = () => {
    //const [ListadoProductos, setListadoProductos] = useState([]);
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


            /* const productRef = doc(database, "items", "eXtE3yaCBzsZI1eoy1Db")
            getDoc(productRef)
            .then(response => setListadoProductos({id: response.id, ...response.data()})) */
           

           /*  setListadoProductos(
                categoria 
                        ? products.filter ((product => product.categoria === categoria))
                        : products
            )
            .catch((error) => console.log(error))
            .finally(()=> setloading(false)) */


            
        /*    if (categoria) {
                products
                .then(productos => setListadoProductos (productos.filter( prod => prod.categoria === categoria)))
                .catch((error) => console.log(error))
                .finally(() => setloading(false) )
            }else{
                products
                .then(productos => setListadoProductos (productos))
                .catch((error) => console.log(error))
                .finally(() => setloading(false) )
                
            }  */
        

        //console.log(categoria);
       // console.log(products);
    return (
        <div>
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