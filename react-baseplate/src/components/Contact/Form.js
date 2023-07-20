import React, { useState } from 'react';

export default function Form({ onSubmit }) {
    
    const [inputData,setInputData] = useState({
        name: '',
        email: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputData.name.trim() === '' || inputData.email.trim() === '') { // add this line to check for blank inputs
            alert('Please fill out all fields.');
            return;
        }
        onSubmit(inputData);
        setInputData({ name: '', email: '' });
    }

    const handleInputChange = (event) => {
        const {name,value} = event.target;
        setInputData((prevInputData) => ({
            ...prevInputData,
            [name]: value
        }));
    }

    return(
        <div className='container w-full m-auto p-4 border rounded-2xl'>
            <h2 className='text-center font-bold '> Contact Registration Form </h2>
            <form onSubmit={handleSubmit}>
                <label className='block'>Name:</label>
                <input className='border rounded-lg mt-1 w-full px-2 py-1'
                    type='text'
                    name='name'
                    value={inputData.name}
                    onChange={handleInputChange}
                />
                <label className='block'>Email Address: </label>
                <input className='border rounded-lg mt-1 w-full px-2 py-1'
                    type='email'
                    name='email'
                    value={inputData.email}
                    onChange={handleInputChange}
                />
                <div className='flex justify-end mt-2'>
                    <input className='border rounded-lg p-2 hover:bg-slate-100' type='submit'/>
                </div>
            </form>
        </div>
    );
}