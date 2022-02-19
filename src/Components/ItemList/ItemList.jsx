import React from 'react';
import Item from '../Item/Item';



const ItemList = ({listado}) => {
    //console.log(listado);
    return (
    <div className='row'>
        {listado.map( (producto) => (
        <Item
        key= {producto.id}
        id= {producto.id}
        categoria= {producto.categoria}
        nombre= {producto.nombre}
        descripcion= {producto.descripcion}
        valor= {producto.valor}
        img= {producto.img}
        stock={producto.stock}
        />
        ))}
    </div>
    );
};

export default ItemList