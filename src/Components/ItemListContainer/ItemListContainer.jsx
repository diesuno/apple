import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import getProducts from '../../Helpers/getProducts';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {
    const [ListadoProductos, setListadoProductos] = useState([]);
    const [loading, setloading] = useState(true)
    const {categoria} = useParams()

        useEffect(()=> {

            if (categoria) {
                getProducts()
                .then(productos => setListadoProductos (productos.filter( prod => prod.categoria === categoria)))
                .catch((error) => console.log(error))
                .finally(() => setloading(false) )
            }else{
                getProducts()
                .then(productos => setListadoProductos (productos))
                .catch((error) => console.log(error))
                .finally(() => setloading(false) )
                
            }
        },[categoria])

        console.log(categoria);
    return (
        <div>
            {
                loading ? 
                <h2>Cargando...</h2>
                :
                <ItemList listado={ListadoProductos}/>
            }
            
        </div>
    );
};

export default ItemListContainer