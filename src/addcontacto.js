import React, { } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Addcontacto = () => {

    const navigate = useNavigate();

    const Ingresarcontacto = async (event) => {
        event.preventDefault();
        const { correo, telefono, direccion, celular, idInformacion } = event.target
        let datosenviados = {
            correo: correo.value,
            telefono: telefono.value,
            direccion: direccion.value,
            celular: celular.value,
            idInformacion: idInformacion.value
        }
        console.log(datosenviados);

        const response = await axios({
            method: 'POST',
            url: 'http://localhost:8000/contacto',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
            },
            data: datosenviados
        });
        console.log(response.data);
    }
    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => navigate('/')}>Volver</button>
            <form onSubmit={Ingresarcontacto}>
                <p className="font-bold py-5">Ingrese Correo: <input type="text" name="correo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@example.com" required /></p>
                <p className="font-bold py-5">Ingresa Telefono: <input type="text" name="telefono" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="7xxxxxx" required /></p>
                <p className="font-bold py-5">Ingrese direccion: <input type="text" name="direccion" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="calle a carrera 1" required /></p>
                <p className="font-bold py-5">Ingresa celular: <input type="text" name="celular" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="313xxxxxxx" required /></p>
                <p className="font-bold py-5">Ingresa contacto: <input type="text" name="idInformacion" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required /></p>
                <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit" value="Guardar" />
            </form>
        </div>
    )
}
export default Addcontacto