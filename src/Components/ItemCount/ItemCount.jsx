import { useState } from 'react'



export const ItemCount = ({initial,stock,onAdd}) =>{

    
    const [contador,setcontador] = useState(initial)
    
    const aumentar = ()=>{
        if (contador < stock){
            setcontador(contador +1)
        }
    }
    const restar = ()=>{
        if (contador > initial){
            setcontador(contador -1)
        }
    }
   /*  const {agregar} = useCartContext()  */
    const agregar  = ()=>{
        
        onAdd(contador)
    } 
    return (
        <div className="container w-50">
            <button className="btn btn-outline-primary"  onClick={aumentar}> + </button>

            <h5>{`  ${contador}  `}</h5>
           
            <button className="btn btn-outline-primary" onClick={restar}> - </button> <br />
            <br />
            <button className="btn btn-outline-primary btn-block" onClick={agregar}>Agregar al carro</button>
        </div>
    )
}

    

