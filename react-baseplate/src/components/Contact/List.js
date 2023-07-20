import React from 'react';

export default function List({ data }) {
    return(
        <div className='container-full'>
            {data.map((contact,index) => (
                <React.Fragment key={index}>
                    <div className='w-full border rounded-2xl mt-1 p-4'>
                        <div className='flex'>
                            <div className='w-1/6'>
                                <div className='bg-blue-500 text-white rounded-full h-16 w-16 flex justify-center items-center text-3xl'>
                                    {
                                        contact.name.split(' ')
                                        .slice(0, 2)
                                        .map((word) => word[0])
                                        .join('')
                                    }
                                </div>
                            </div>
                            <div className='w-5/6 text-slate-800'>
                                <h5>{contact.name}</h5>
                                <p>{contact.email}</p>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}