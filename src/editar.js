import axios from "axios";
import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

const Editar = () => {

    const { id_data } = useParams()
    const [data, setData] = useState([])
    const navigate = useNavigate();

    const EditarUno = async () => {

        const response = await axios({
            method: 'GET',
            url: `http://localhost:8000/datacontac/${id_data}`,
            headers: {}
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
            {},
            data: datosenviados
        });
    }
    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => navigate('/')}>Volver</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={EditarUno}>Obtener</button>
            <form onSubmit={actualizar}>
                <p className="font-bold py-5">Ingrese nuevo nombre: <input type="text" defaultValue={data.nombre} name="nombre" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required /></p>
                <p className="font-bold py-5">Ingresa nuevo apellido: <input type="text" defaultValue={data.apellido} name="apellido" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Smith" required /></p>
                <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit" value="Guardar" />
            </form>
        </div>
    )
}
export default Editar