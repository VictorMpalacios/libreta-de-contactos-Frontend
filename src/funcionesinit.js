import axios from "axios"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const TraerContacto = () => {

    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const getInfos = async () => {
        const response = await axios({
            method: 'GET',
            url: 'http://localhost:8000/datacontac',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
            },
        });
        setData(response.data);
    }
    const elimInfo = async (id_data) => {
        console.log(id_data);
        const response = await axios({
            method: 'DELETE',
            url: `http://localhost:8000/datacontac/${id_data}`,
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
        <div className="container mx-auto px-10 py-5">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={getInfos}>obtener</button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={() => navigate('/Ingresar')} >Ingresar un nuevo contacto</button>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th colSpan={3} className="text-center text-2xl font-bold" >CONTACTOS</th>
                    </tr>
                    <tr>
                        <th scope="col" class="py-3 px-6">Nombre</th>
                        <th scope="col" class="py-3 px-6">Apellido</th>
                        <th scope="col" class="py-3 px-6">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white" key={index}>{item.nombre}</th>
                                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white" key={index}>{item.apellido}</th>
                                <th><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => navigate(`/InformacionContacto/${item.id_data}`)} >Ver informacion</button>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => elimInfo(item.id_data)}>eliminar</button>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => navigate(`/EditarContacto/${item.id_data}`)}>Editar</button></th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default TraerContacto