import React from 'react';
import Info1 from './info1contacto';

function infocontacto() {
    return (
        <div className="bg-zinc-700 justify-between px-10 py-20" >
            <h1 className='text-5xl text-white font-bold text-center'>Informacion de los contactos:</h1>
            <div className="bg-zinc-600 flex">
                <Info1 />
            </div>
        </div>
    );
} export default infocontacto;