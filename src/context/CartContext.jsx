import { createContext, useState, useContext } from "react";

const cartContext = createContext([])

export function useCartContext() {return useContext(cartContext)} 

function CartContextProvider({ children }) {
    
    const [cartList, setCartList] = useState([]);

      function agregarAlCarrito(item){
        let valorSumado = (item.valor * item.cantidad)
        if(chequearDuplicados(item.nombre)){
            const cambiarCantidad = [...cartList]
            cambiarCantidad.forEach(producto =>{
                if(producto.nombre === item.nombre){
                    producto.valor += valorSumado
                    producto.cantidad += item.cantidad
                }
            })
          
            return setCartList(cambiarCantidad)
        }
        return setCartList( [ ...cartList, {id: item.id, img: item.img, nombre: item.nombre, valor: valorSumado, cantidad: item.cantidad }] )
        
    } 
 
    const eliminarProducto = (item) => {
		const eliminarItem = [...cartList]
		const itemEliminado = eliminarItem.filter(x => x.nombre !== item)
		return setCartList(itemEliminado)
	}

    function vaciarCarrito() {
        setCartList([])
        
    }
    const tax = 1.07 //tax Miami

    
    const totalTax = () =>{
        return cartList.reduce((acum, product) => acum = acum + ((product.valor * tax) - product.valor ), 0 ).toFixed(2)
    }
    const total = () =>{
        return cartList.reduce((acum, product) => acum = acum + product.valor, 0 )
    }
    const cantidadTotal = () =>{
        return cartList.reduce((acum, product) => acum = acum + product.cantidad, 0 )
    }

    

    const chequearDuplicados = (parametro) =>  { 
        const buscarDuplicado = cartList.find( (i) => {
            return i.nombre === parametro
        })
        return buscarDuplicado
    }


  return <cartContext.Provider value={{
      cartList,
      chequearDuplicados,
      agregarAlCarrito,
      eliminarProducto,
      total,
      cantidadTotal,
      totalTax,
      vaciarCarrito
  }} >
        {children}
  </cartContext.Provider>;
}

export default CartContextProvider;
