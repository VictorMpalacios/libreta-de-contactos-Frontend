import React from 'react';
import EditInfContac from './editInfcontac'

function pageseditarcontac() {
    return (
        <div className="bg-zinc-700 justify-between px-10 py-20" >
        <h1 className='text-5xl text-white font-bold text-center'>Editar la informacion del contacto:</h1>
        <div className="bg-zinc-600 flex">
          <EditInfContac />
        </div>
      </div>
    );
}
export default pageseditarcontac;