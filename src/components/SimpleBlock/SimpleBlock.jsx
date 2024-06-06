import React from 'react';
import './SimpleBlock.css';
import { Button } from '../Buttons/Button.jsx';

function SimpleBlock({title ,paragraph} ) {
    return (
        <div className='simple-block'>
            
            <h1>{title}<br /><hr></hr></h1>

            <p>
                { paragraph }
            </p>


            <Button/>
            
        </div>
    )
}

export { SimpleBlock };