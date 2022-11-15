import React from 'react';
import Form from './form';

function Add() {
    return (
        <div className="bg-zinc-700 justify-between px-10 py-20" >
            <h1 className='text-5xl text-white font-bold text-center'>Ingreso nuevo contacto:</h1>
            <div className="bg-zinc-600 flex">
                <Form />
            </div>
        </div>
    );
}
export default Add;