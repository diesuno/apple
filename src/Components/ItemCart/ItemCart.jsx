import { useCartContext } from "../../context/CartContext"



const ProductoCarro = () => {
  const {listaDeCarro,eliminarProducto} = useCartContext ([])

  return ( 
  <>
    {listaDeCarro.map((producto) => <div className='  border border-2' key={producto.nombre}><br /><br />
          <div className='cartProduct'>

            <img src={producto.img} alt="" width={90} />
            <p className='cartData'>{producto.nombre} -  $ {(producto.valor) }  Cantidad: {producto.cantidad} </p>
            <button className="btn borrarUno btn-outline-danger" onClick={() => eliminarProducto(producto.nombre)}>X</button>
          </div>
         
        <br /><br /><br />
        
        </div> ) }
        </>
  )
}

export default ProductoCarro