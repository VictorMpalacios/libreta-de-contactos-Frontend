import axios from "axios";
import React, { useState    } from "react"
import { useNavigate, useParams } from "react-router-dom";

const Editar = () => {

    const { id_data } = useParams()
    const [data, setData] = useState([])
    const navigate = useNavigate();

    const EditarUno = async () => {

        const response = await axios({
            method: 'GET',
            url: `http://localhost:8000/datacontac/${id_data}`,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
            }
        });
        setData(response.data);
    }

    const actualizar = async (event) => {

        event.preventDefault();
        const { nombre, apellido } = event.target

        let datosenviados = {
            nombre: nombre.value,
            apellido: apellido.value
        }

        const response = await axios({
            method: 'PUT',
            url: `http://localhost:8000/datacontac/${id_data}`,
            headers:
            {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
            },

            data: datosenviados

        });


    }

    return (

        <div className="main-container">
            <button onClick={() => navigate('/')}>Volver</button>
            <button onClick={EditarUno}>Obtener</button>

            <form onSubmit={actualizar}>
            <p>Ingrese su nombre: <input type="text" defaultValue={data.nombre} name="nombre" /></p>
                <p>Ingresa su apellido: <input type="text" defaultValue={data.apellido} name="apellido" /></p>
                <input type="submit" value="Guardar" />

            </form>
        </div>

    )
}
export default Editar       