import React, { useState } from "react"
import axios from "axios";
import {
    useNavigate,
    useParams
} from "react-router-dom";

const Info1 = () => {

    const { id_data } = useParams()
    const [data, setData] = useState([])
    const navigate = useNavigate();

    const ObtenerInfo = async () => {
        const response = await axios({
            method: 'GET',
            url: `http://localhost:8000/datacontac/${id_data}/contacto`,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
            }
        });
        setData(response.data);
    }

    const Eliminarunainfo = async (id_contacto) => {
        const response = await axios({
            method: 'DELETE',
            url: `http://localhost:8000/contacto/${id_contacto}`,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
            },
        });
        console.log(response);
    }
    return (
        <div className=" container mx-auto px-10 py-5">
            <div>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={ObtenerInfo}>Obtener Informacion</button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 " onClick={() => navigate('/')} >Volver</button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={() => navigate('/Ingresarcontacto')} >Ingresar informacion</button>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th colSpan={5} className="text-center text-2xl font-bold" > INFORMACION CONTACTOS</th>
                        </tr>
                        <tr>
                            <th scope="col" class="py-3 px-6">Correo</th>
                            <th scope="col" class="py-3 px-6">Telefono</th>
                            <th scope="col" class="py-3 px-6">Direccion</th>
                            <th scope="col" class="py-3 px-6">Celular</th>
                            <th scope="col" class="py-3 px-6">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white" key={index}>{item.correo}</th>
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white" key={index}>{item.telefono}</th>
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white" key={index}>{item.direccion}</th>
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white" key={index}>{item.celular}</th>
                                    <th>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => navigate(`/EditartInformacion/${item.id_contacto}`)}>Editar</button>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => Eliminarunainfo(item.id_contacto)}>eliminar</button>
                                    </th>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Info1