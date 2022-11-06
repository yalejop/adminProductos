import React, {useEffect, useState } from "react";
import { Link, useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const Producto = () => {
    const {id} = useParams();
    const [productos, setProductos] = useState({});
    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/productos/"+id)
            .then(res => {
                setProductos(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    const borrarProducto = id => {
        axios.delete("http://localhost:8000/api/productos/"+id)
            .then(res =>{
                //Actualizamos lista a través de filter
                let nuevaLista = productos.filter(producto => producto._id !== id);
                setProductos(nuevaLista);

            })
            .then(res => history.push("/"))
    }

    return(
        <div className="card">
            <div className="card-header"><h1>{productos.nombre}</h1></div>
            <div className="card-body">
                <h2>${productos.precio}</h2>
                <p>
                    {productos.descripcion}
                </p>
                <Link to="/" className="btn btn-primary">Regresar</Link>
                <button className="btn btn-danger" onClick={() => borrarProducto(productos._id)}>Eliminar</button>
            </div>
        </div>
    )

}

export default Producto;
