import React from 'react';
import { Link } from 'react-router-dom';

import "./Item.css"





const Item = ({id, nombre, descripcion, valor, img, stock, onAdd}) => {

    
    

    return (
            <div className='cards' id={id}>
                <div className="card w-25 mt-5" >
                    <h3 className="card-header">
                        {nombre}
                    </h3>
                    <div className="card-body">
                        <img width={250} src={img} alt='' />            
                        <div>
                            <h5>$ {valor}</h5>
                        </div>                                                           
                    </div>
                    <div className="card-footer">
                        <Link to={`/detalle/${id}`}>
                            <button className="btn btn-outline-primary"> DETALLE DEL PRODUCTO</button>
                        </Link>
                    </div>
                </div>
            </div>
)}

export default Item