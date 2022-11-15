import axios from "axios";
import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

const EditInfcontac = () => {

    const { id_contacto } = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();


    const Editaruno = async () => {
        const response = await axios({
            method: 'GET',
            url: `http://localhost:8000/contacto/${id_contacto}`,
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
        const { correo, telefono, direccion, celular } = event.target
        let datosenviados = {
            correo: correo.value,
            telefono: telefono.value,
            direccion: direccion.value,
            celular: celular.value
        }
        const response = await axios({
            method: 'PUT',
            url: `http://localhost:8000/contacto/${id_contacto}`,
            headers:
                {},
            data: datosenviados
        });
    }
    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => navigate('/')}>Volver</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={Editaruno}>Obtener</button>
            <form onSubmit={actualizar}>
                <p className="font-bold py-5">Ingrese nuevo Correo: <input type="text" defaultValue={data.correo} name="correo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@example.com" required /></p>
                <p className="font-bold py-5">Ingresa nuevo Telefono: <input type="text" defaultValue={data.telefono} name="telefono" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1234567" required /></p>
                <p className="font-bold py-5">Ingrese nueva direccion: <input type="text" defaultValue={data.direccion} name="direccion" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Calle a Carrera 1" required /></p>
                <p className="font-bold py-5">Ingresa nuevo celular: <input type="text" defaultValue={data.celular} name="celular" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1234567890" required /></p>
                <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit" value="Guardar" />
            </form>
        </div>
    )
}
export default EditInfcontac;