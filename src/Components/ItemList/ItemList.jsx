import Productos from '../Item/Item';



const ListadoItems = ({listado}) => {
    return (
    <div className='row'>
        {listado.map( (producto) => (
        <Productos
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

export default ListadoItems