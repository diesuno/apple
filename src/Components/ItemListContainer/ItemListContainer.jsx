import { useEffect, useState } from "react"
import { getFetch } from "../../Productos/products"
import ItemCount from "../ItemCount/ItemCount"


function ItemListContainer (){
    const [productos,setProductos] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(()=>{
        getFetch
        .then(res => setProductos(res))
        .catch(err => console.log(err))
        .finally(()=> setloading(false))
    },[])

    function onAdd(cant){
        console.log(cant);
    }

    return (
        <div>
            { loading ? <h2>Cargando ...</h2> :
                                    productos.map( prod => <div 
                                        key={prod.id}
                                        className='col-md-4'
                                    >                        
                                        <div className="card w-100 mt-5" >
                                            <div className="card-header">
                                                {`${prod.nombre}`}
                                            </div>
                                            <div className="card-body">
                                                <img src={prod.img} alt='' className='w-50' />
                                                <br />
                                                <h3>$ {prod.valor}</h3>                                                          
                                            </div>
                                            <div className="card-footer">
                                                {`${prod.descripcion}`}                                                            
                                            </div>

                                        </div>
                                        <br />
                                        <ItemCount initial={1} stock={`${prod.stock}`} onAdd={onAdd} />
                                    </div>                                    
            
            ) }           
            
            
        </div>
    )
}

export default ItemListContainer

