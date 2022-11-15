import React from 'react';
import Editar from './editar';

function edit() {
  return (
    <div className="bg-zinc-700 justify-between px-10 py-20" >
      <h1 className='text-5xl text-white font-bold text-center'>Editar nombre del contacto:</h1>
      <div className="bg-zinc-600 flex">
        <Editar />
      </div>
    </div>
  )
}
export default edit;