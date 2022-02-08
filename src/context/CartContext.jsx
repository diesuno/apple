import { createContext, useState, useContext } from "react";

const cartContext = createContext([])

export function useCartContext() {return useContext(cartContext)} 

function CartContextProvider({ children }) {
    
    const [cartList, setCartList] = useState([]);

    



    function agregarAlCarrito(element){
        let valorSumado = (element.valor * element.cantidad)
        if(chequearDuplicados(element.nombre)){
            const cambiarCantidad = [...cartList]
            cambiarCantidad.forEach(item =>{
                if(item.nombre === element.nombre){
                    item.valor += valorSumado
                    item.cantidad += element.cantidad
                }
            })
          
            return setCartList(cambiarCantidad)
        }
        return setCartList( [ ...cartList, {img: element.img, nombre: element.nombre, valor: valorSumado, cantidad: element.cantidad }] )
        
    }

    const eliminarProducto = (item) => {
		const eliminarItem = [...cartList]
		const itemEliminado = eliminarItem.filter(x => x.nombre !== item)
		return setCartList(itemEliminado)
	}

    function vaciarCarrito() {
        setCartList([])
        
    }

    const chequearDuplicados = (parametro) =>  { 
        const buscarDuplicado = cartList.find( (i) => {
            return i.nombre === parametro
        })
        return buscarDuplicado
    }


  return <cartContext.Provider value={{
      cartList,
      agregarAlCarrito,
      eliminarProducto,
      vaciarCarrito
  }} >
        {children}
  </cartContext.Provider>;
}

export default CartContextProvider;
