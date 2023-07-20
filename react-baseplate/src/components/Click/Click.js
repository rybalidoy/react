import React, { useState } from 'react';

export default function Click() {
    const [count, setCount] = useState(0);

    const click = () => {
        setCount(prevCount => prevCount + 1);
    }

    return(
        <div className='border p-2 m-4 text-center'>
            <button className='text-xl w-24 border hover:bg-slate-200 hover:border ' onClick={click}>
                Click me
            </button>
            <h2 className='m-2 p-2 text-2xl'> Total no of clicks: {count} </h2>
        </div>
    );
}