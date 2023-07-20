
export default function ReusableList( props ) {
    return(
        <div>
            <ul className='list-disc'>
            {props.items.map(([title,url,message]) => (
                <li className='flex items-center m-2'>
                    <img className='inline-block w-24 h-24 bg-center bg-cover' src={url} alt={'image of ' + title}/>
                    <div className='p-2 inline-block'>
                        <p className='text-4xl'> {title} </p>
                        <p className='text-2xl'> {message} </p>
                    </div>
                </li>
            ))}
            </ul>
        </div>
    );
}