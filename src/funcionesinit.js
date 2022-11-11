import axios from "axios"
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const TraerContacto = () => {

    const navigate = useNavigate();
    const { id_data } = useParams();
    const [data, setData] = useState([]);

    const getcontacto = async () => {
        const response = await axios({
            method: 'GET',
            url: `http://localhost:8000/datacontac/${id_data}`,
            headers: {},
        });
        setData(response.data);
    }
    const getInfos = async () => {

        const response = await axios({

            method: 'GET',
            url: 'http://localhost:8000/datacontac',
            headers: {},

        });

        setData(response.data);
    }
    const elimInfo = async (id_data) => {

        console.log(id_data);
        const response = await axios({

            method: 'DELETE',
            url: `http://localhost:8000/datacontac/${id_data}`,
            headers: {},


        });
        console.log(response);

    }
    return (
        <div className="main-container">

            <button onClick={getInfos}>obtener</button>
            <button onClick={() => navigate('/Ingresar')} >Ingresar un nuevo contacto</button>

            <table>
                <thead>

                    <tr>

                        <th colSpan={3} >CONTACTOS</th>

                    </tr>

                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>

                    {data.map((item, index) => {
                        return (
                            <tr>
                                <th key={index}>{item.nombre}</th>
                                <th key={index}>{item.apellido}</th>
                                <th><button onClick={() => navigate(`/InformacionContacto/${item.id_data}/1`)} >Ver informacion</button>
                                    <button onClick={() => elimInfo(item.id_data)}>eliminar</button>
                                    <button onClick={() => navigate(`/EditarContacto/${item.id_data}`)}>Editar</button></th>
                            </tr>
                        )
                    })}

                </tbody>




            </table>


        </div>


    );

}
export default TraerContacto