import React, { useEffect, useState } from 'react';

import './Contact.css';

import Form from './Form';
import List from './List';

export default function ContactList() {

    const [contacts, setContacts] = useState(() => {
        const savedContacts = JSON.parse(localStorage.getItem('myContacts'));
        return savedContacts || [];
    });

    /**
     *  Local Storage for Contacts
     */
    useEffect(() => {
        console.log('Saving contacts to local storage: ',contacts);
        localStorage.setItem('myContacts',JSON.stringify(contacts));
    },[contacts]);
    
    const handleFormSubmit = (inputData) => {
        setContacts((prevContacts) => [...prevContacts,inputData]);
    }

    return(
        <div className='fs-xl w-1/4 m-auto rounded-2xl'>
            <Form onSubmit={handleFormSubmit}/>
            <div className='w-full p-5 mt-2 border rounded-2xl'>
                <div className='text-center mt-1 mb-4'>
                    <h1 className=''> Contacts </h1>
                </div>
                <List data={contacts}/>
            </div>
        </div>
    );
}