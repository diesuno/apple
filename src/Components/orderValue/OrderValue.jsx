import { useCartContext } from "../../context/CartContext"

const ValorOrden = () => {
  const {total} = useCartContext ([])
  return (
    
      
    
  
      <h4>{`TOTAL A PAGAR  U$S ${total()}.- `}</h4>
      
  
    )
        
    
  
  
}

export default ValorOrden