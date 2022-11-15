import React from 'react';
import TraerContacto from './funcionesinit';
import './index.css'

function App() {
  return (
    <div className="bg-zinc-700 justify-between px-10 py-20" >
      <h1 className='text-5xl text-white font-bold text-center'>Inicio</h1>
      <div className="bg-zinc-600 flex">
        <TraerContacto />
      </div>
    </div>
  );
}

export default App;
