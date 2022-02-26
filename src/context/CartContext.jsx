import { createContext, useState, useContext } from "react";

const contenidoDelCarro = createContext([])

export function useCartContext() {return useContext(contenidoDelCarro)} 

function ProveedorDeContenidosDelCarro({ children }) {
    
    const [listaDeCarro, guardarListaEnCarro] = useState([]);

      function agregarAlCarrito(item){
        let valorSumado = (item.valor * item.cantidad)
        if(chequearDuplicados(item.nombre)){
            const cambiarCantidad = [...listaDeCarro]
            cambiarCantidad.forEach(producto =>{
                if(producto.nombre === item.nombre){
                    producto.valor += valorSumado
                    producto.cantidad += item.cantidad
                }
            })
          
            return guardarListaEnCarro(cambiarCantidad)
        }
        return guardarListaEnCarro( [ ...listaDeCarro, {id: item.id, img: item.img, nombre: item.nombre, valor: valorSumado, cantidad: item.cantidad }] )
        
    } 
 
    const eliminarProducto = (item) => {
		const eliminarItem = [...listaDeCarro]
		const itemEliminado = eliminarItem.filter(x => x.nombre !== item)
		return guardarListaEnCarro(itemEliminado)
	}

    function vaciarCarrito() {
        guardarListaEnCarro([])
        
    }
    const tax = 1.08 //tax Miami

    
    const totalTax = () =>{
        return listaDeCarro.reduce((acum, product) => acum = acum + ((product.valor * tax) - product.valor ), 0 ).toFixed(2)
    }
    const total = () =>{
        return listaDeCarro.reduce((acum, product) => acum = acum + (product.valor * tax), 0 ).toFixed(2)
    }
   
    const cantidadTotal = () =>{
        return listaDeCarro.reduce((acum, product) => acum = acum + product.cantidad, 0 )
    }

    

    const chequearDuplicados = (parametro) =>  { 
        const buscarDuplicado = listaDeCarro.find( (i) => {
            return i.nombre === parametro
        })
        return buscarDuplicado
    }


  return <contenidoDelCarro.Provider value={{
      listaDeCarro,
      chequearDuplicados,
      agregarAlCarrito,
      eliminarProducto,
      total,
      cantidadTotal,
      totalTax,
      vaciarCarrito
  }} >
        {children}
  </contenidoDelCarro.Provider>;
}

export default ProveedorDeContenidosDelCarro;
