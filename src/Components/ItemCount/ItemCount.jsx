import { useState } from 'react'
export const ItemCount = ({initial,stock,onAdd}) =>{


    const [contador,setcontador] = useState(initial)
    
    const handleUp = ()=>{
        if (contador < stock){
            setcontador(contador +1)
        }
    }
    const handleDown = ()=>{
        if (contador > initial){
            setcontador(contador -1)
        }
    }

    const agregar  = ()=>{
        onAdd(contador)
    }
    return (
        <div className="container w-50">
            <button className="btn btn-outline-primary"  onClick={handleUp}> + </button>

            <h5>{`  ${contador}  `}</h5>
           
            <button className="btn btn-outline-primary" onClick={handleDown}> - </button> <br />
            <br />
            <button className="btn btn-outline-primary btn-block" onClick={agregar}>Agregar al carro</button>
        </div>
    )
}

    

