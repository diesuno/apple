import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import "./cartValue.css"

const ValorCarro = () => {
    const {totalTax,total, vaciarCarrito} = useCartContext ([])
  return (
    <div className='valorCarro'>
    
    <br />
    
      <br />
    <h6>{`TAX U$S ${totalTax()}.-`}</h6>
    
    <h1>{`TOTAL A PAGAR  U$S ${total()}.-`}</h1>
    



    <button  className="btn btn-outline-danger" onClick={vaciarCarrito} >Vaciar Carrito</button>
<Link to="/form">

    <button className="btn btn-outline-success">Finalizar Compra</button>
</Link>
                    
    </div>
        
        
  )
}

export default ValorCarro