import React, { } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const navigate = useNavigate();
    const ingresarInfo = async (event) => {
        event.preventDefault();
        const { nombre, apellido } = event.target
        let datosenviados = {
            nombre: nombre.value,
            apellido: apellido.value
        }
        console.log(datosenviados);
        const response = await axios({
            method: 'POST',
            url: 'http://localhost:8000/datacontac',
            headers:
                {},
            data: datosenviados
        });
        console.log(response.data);
    }
    return (
        <div className="container mx-auto px-10 py-5">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => navigate('/')}>Volver</button>
            <form onSubmit={ingresarInfo}>
                <p className="font-bold py-5">Ingrese nombre: <input type="text" name="nombre" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/></p>
                <p className="font-bold py-5">Ingresa apellido: <input type="text" name="apellido" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Smith" required /></p>
                <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit" value="Guardar" />
            </form>
        </div>
    )
}
export default Form 