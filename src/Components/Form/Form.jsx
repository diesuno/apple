
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import { useState } from 'react'
import { Button, Col, Form, FormControl, FormGroup, FormLabel, InputGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import "./form.css"


const Formulario = () => {
    const [validar, guardarValidacion] = useState(false);
      
    const ejecutarEnviar = (event) => {
      const eventoFormulario = event.currentTarget;
      if (eventoFormulario.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      guardarValidacion(true);
    };
        
        const [id, guardarId] = useState('')
          const [informacionFormulario, guardarInformacionFormulario] = useState({
              correo: '',
              telefono: '',
              nombre: '',
           
          })
      
        const { listaDeCarro, vaciarCarrito,total} = useCartContext()
      
        const realizarCompra = async (e) => {
          e.preventDefault()  
      
           
          let orden = {}          
      
          orden.buyer =  informacionFormulario 
          orden.total = total();
      
          orden.items = listaDeCarro.map(producto => {
              const id = producto.id;
              const nombre = producto.nombre;
              const precio = producto.valor * producto.cantidad;
              const cantidad = producto.cantidad
            
      
              return {
                  id, 
                  nombre, 
                  precio, 
                  cantidad,
                 
              }  
               
          }) 
           const baseDeDatos = getFirestore()
          const coleccionDeOrdenes = collection (baseDeDatos, 'orders')
          await addDoc( coleccionDeOrdenes, orden)
          .then(resp => guardarId(resp.id))
      
      
          const consultaColeccion = collection(baseDeDatos, 'items')
          
      
          const consultaActulizarStock = query(
            consultaColeccion, 
              where( documentId() , 'in', listaDeCarro.map(it => it.id) )          
          ) 
      
          const lote = writeBatch(baseDeDatos)
      
          await getDocs(consultaActulizarStock)
          .then(resp => resp.docs.forEach(res => lote.update(res.ref, {
                  stock: res.data().stock - listaDeCarro.find(item => item.id === res.id).cantidad
              })
          ))
          .catch(err => console.log(err))
          .finally(() => { 
            guardarInformacionFormulario({
                      correo: '',
                      telefono: '',
                      nombre: ''
                     
                  })
                  vaciarCarrito()
              })    
      lote.commit()  
      
             } 
      
      const herramientaDeCambio = (event) => {      
        guardarInformacionFormulario({ 
              ...informacionFormulario,
              [event.target.name]: event.target.value
          })
      }

     
        
      
  return (
      
    


    <div className="formulario">
        <h4 className="btn-outline-success" >{id !== '' && `Compra finalizada su numero de ticket es : ${id}` }</h4>
        <br />
    <Form  noValidate validated={validar} onSubmit={realizarCompra}>
      <Row className="mb-3">
        <FormGroup as={Col} md="4" controlId="validationCustom01">
          <FormLabel>Nombre y Apellido</FormLabel>
          <FormControl 
            required
            type="text"
            name='nombre'
            placeholder="Nombre y Apellido"
            onChange={herramientaDeCambio}
            value={informacionFormulario.nombre}
          />
          <Form.Control.Feedback>Buena Suerte!!</Form.Control.Feedback>
        </FormGroup>
        <FormGroup as={Col} md="4" controlId="validationCustom02">
          <FormLabel>Telefono</FormLabel>
          <FormControl
            required
            type="number"
            placeholder="Telefono"
            name='telefono'
            onChange={herramientaDeCambio}
            value={informacionFormulario.telefono}
          />
          <Form.Control.Feedback>Buena Suerte!!</Form.Control.Feedback>
        </FormGroup>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Correo</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <FormControl
              type="email"
              name='correo'
              placeholder="Correo Electronico"
              aria-describedby="inputGroupPrepend"
              onChange={herramientaDeCambio}
              value={informacionFormulario.correo}
              required
            />
            <Form.Control.Feedback type="invalid">
              Elegir un Correo electronico Correcto
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
     
      <Link to='/'>
            <button className='btn btn-danger m-2'onClick={vaciarCarrito}>Cerrar</button>
     </Link>
      <Button type="submit" disabled={!informacionFormulario.correo   || !informacionFormulario.nombre || !informacionFormulario.telefono} onClick={ejecutarEnviar}  >Comprar</Button>
    </Form>
    <br />
    </div>
    );
}



export default Formulario

