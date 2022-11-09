import axios from "axios"
import React, { useState } from "react";
//import { useNavigate} from "react-router-dom";


const TraerContacto = () => {

    const [data, setData] = useState([]);
    //const navigate = useNavigate();
    // const getcontacto = async () => {
    //     const response = await axios({
    //         method: 'GET',
    //         url: `http://localhost:8000/contacto/${id_contacto}`,
    //         headers: {

    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //             'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',

    //         },
    //     });
    //     setData(response.data);
    // }
    const getInfos = async () => {

        const response = await axios({

            method: 'GET',
            url: 'http://localhost:8000/contacto',
            headers: {

                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',

            },

        });

        setData(response.data);
    }
    return (



        <div className="main-container">

            <button onClick={getInfos}>obtener</button>

            <table>
                <thead>

                    <tr>

                        <th colSpan={3} >CONTACTOS</th>

                    </tr>

                    <tr>
                        <th>Correo</th>
                        <th>Telefono</th>
                        <th>Direccion</th>
                        <th>Celular</th>
                        <th>Informacion</th>
                        <th>Empresa</th>
                        <th>Profesion</th>
                    </tr>
                </thead>

                <tbody>

                    {data.map((item, index) => {
                        return (
                            <tr>
                                <th key={index}>{item.correo}</th>
                                <th key={index}>{item.telefono}</th>
                                <th key={index}>{item.direccion}</th>
                                <th key={index}>{item.celular}</th>
                            </tr>
                        )

                    })}

                </tbody>




            </table>


        </div>


    );

}
export default TraerContacto