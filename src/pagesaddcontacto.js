import React from 'react';
import AddContacto from './addcontacto'

function pagesaddcontacto() {
    return (
        <div className=" bg-zinc-700 justify-between px-10 py-20" >
            <h1 className='text-5xl text-white font-bold text-center'>Registrar informacion del contacto:</h1>
            <div className="bg-zinc-600 flex">
                <AddContacto />
            </div>
        </div>
    );
}
export default pagesaddcontacto;