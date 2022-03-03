import { useState } from 'react'

import img from '../Carrito/carritoNegro.png'



export const ContadorItems = ({initial,stock,onAdd}) =>{

    
    const [contador,guardarContador] = useState(initial)
    
    const aumentar = ()=>{
        if (contador < stock){
            guardarContador(contador +1)
        }
    }
    const restar = ()=>{
        if (contador > initial){
            guardarContador(contador -1)
        }
    }

    const agregar  = ()=>{
        
        onAdd(contador)
    } 
    return (
        <div className="container w-50">
            <button className=" col-2 btn btn-outline-primary"  onClick={aumentar}> + </button>

            <h4 className=" col-2 btn" >{`  ${contador}  `}</h4>
           
            <button className="btn  col-2 btn-outline-primary" onClick={restar}> - </button> <br />
            <br />
            <button className="btn btn-outline-primary btn-block" onClick={agregar}><img src={img} alt='Logo' width={30} /></button>
        </div>
    )
}

    

