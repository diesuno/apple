import React from 'react';
import { Link } from 'react-router-dom';
import "./Item.css"




const Item = ({id, nombre, descripcion, valor, img, stock, onAdd}) => {


    

    return (
            <div className='cards' id={id}>
                <div className="card w-25 mt-5" >
                    <div className="card-header">
                        {nombre}
                    </div>
                    <div className="card-body">
                        <img width={250} src={img} alt='' />            
                        <div>
                            <p>$ {valor}</p>
                        </div>                                                           
                    </div>
                    <div className="card-footer">
                        <Link to={`/detalle/${id}`}>
                            <button> DETALLE DEL PRODUCTO</button>
                        </Link>
                    </div>
                </div>
            </div>
)}

export default Item