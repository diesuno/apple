import { Link } from 'react-router-dom';
import "./Item.css"





const Productos = ({id, nombre, valor, img}) => {
  
   
    

    return (

        
        
            
            <div className='col-4' id={id}>
                <div className="card  mt-5" >
                    <h3 className="card-header">
                        {nombre}
                    </h3>
                    <div className="card-body">
                        <img width={150} src={img} alt='' />            
                        <div>
                            <br />
                            <h5>U$S {valor}</h5>                      
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

export default Productos