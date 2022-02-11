import { useCartContext } from '../../context/CartContext'
import img from '../Carrito/carrito.png'



export const Carrito = () => {
    const {cantidadTotal} = useCartContext ([])
    return (
        <button type="button" className="btn  position-relative">
                    <img src={img} alt='Logo' width={30}/>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cantidadTotal() !== 0 && cantidadTotal()}
                    </span>
                </button>
    )
}
