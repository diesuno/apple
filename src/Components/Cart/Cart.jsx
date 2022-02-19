import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  query, 
  where, 
  documentId, 
  writeBatch, 
  getDocs 
} from 'firebase/firestore'

import { Link } from 'react-router-dom';

import "./cart.css"



const Cart = () => {

  const [id, setId] = useState('')
    const [dataForm, setDataForm] = useState({
        email: '',
        phone: '',
        name: ''
    })

  const { cartList, eliminarProducto , vaciarCarrito,total,totalTax } = useCartContext()

  const realizarCompra = async (e) => {
    e.preventDefault()  

    // Nuevo objeto de orders    
    let orden = {}          

    orden.buyer =  dataForm 
    orden.total = total();

    orden.items = cartList.map(cartItem => {
        const id = cartItem.id;
        const nombre = cartItem.nombre;
        const precio = cartItem.valor * cartItem.cantidad;
        const cantidad = cartItem.cantidad

        return {
            id, 
            nombre, 
            precio, 
            cantidad
        }  
         
    }) 
     const db = getFirestore()
    const ordersCollection = collection (db, 'orders')
    await addDoc( ordersCollection, orden)
    .then(resp => setId(resp.id))


    const queryCollection = collection(db, 'items')
    

    const queryActulizarStock = query(
        queryCollection, 
        where( documentId() , 'in', cartList.map(it => it.id) )          
    ) 

    const batch = writeBatch(db)

    await getDocs(queryActulizarStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
        })
    ))
    .catch(err => console.log(err))
    .finally(() => { 
            setDataForm({
                email: '',
                phone: '',
                name: ''
            })
            vaciarCarrito()
        })    
batch.commit()  

       } 

const handleChange = (event) => {      
    setDataForm({ 
        ...dataForm,
        [event.target.name]: event.target.value
    })
}


 

  return <div>
      <h7>{id !== '' && ` Su numero de ticket es : ${id}` }</h7>
      {cartList.length !== 0 ? 
     <>
      {cartList.map((prod) => <div className='  border border-2' key={prod.nombre}><br />
          <div className='cartProduct'>

            <img src={prod.img} alt="" width={90} />
            <p className='cartData'>{prod.nombre} -   $ {(prod.valor) }  Cantidad: {prod.cantidad} </p>
            <button className="btn borrarUno btn-outline-danger" onClick={() => eliminarProducto(prod.nombre)}>X</button>
          </div>
        
          
        
        
        
        
        
         
        <br /><br />
        </div> ) }
        <br />
        <button  className="btn btn-outline-danger" onClick={vaciarCarrito} >Vaciar Carrito</button>
        <br />
        <div>
          <br />
        <h6>{`TAX  $ ${totalTax()}`}</h6>
        
        <h1>{`TOTAL  $ ${total()}`}</h1>
        <br />

 <div className=' formComprador border border-2'>
   <br />
      <form 
                    onSubmit={realizarCompra}                           
                >
                    <input  
                        type='text' 
                        name='name' 
                        placeholder='Nombre' 
                        onChange={handleChange}
                        value={dataForm.name}
                    />
                    <br /><br />
                    <input 
                        type='number' 
                        name='phone'
                        placeholder='Telefono' 
                        onChange={handleChange}
                        value={dataForm.phone}
                    />
                    <br/><br />
                    <input 
                        type='email' 
                        name='email'
                        placeholder='Correo' 
                        onChange={handleChange}
                        value={dataForm.email}
                    />
                  
                    <br/><br />
                    <button className="btn btn-outline-success">Finalizar Compra</button>
                </form>
      
                </div>
     
        
             


        </div>
        <br />
        
        </>: 
        <div>
          
          <h2 className='border border-2'  >No hay productos seleccionados : (</h2>
         
          <Link to="/">
            <button className="btn btn-outline-primary">Seguir comprando</button>
          </Link>
        </div>
        
      }    
  </div>;
}

export default Cart;
