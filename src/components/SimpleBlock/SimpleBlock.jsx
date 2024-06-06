import React from 'react';
import './SimpleBlock.css';
import { Button } from '../Buttons/Button.jsx';

function SimpleBlock() {
    return (
        <div className='simple-block'>
            
            <h1>Un plateau technique de pointe <br /> <hr></hr></h1>
            

            <p>
                

                Vitae volutpat commodo velit vel donec mus
                nisl eleifend tincidunt. Scelerisque at 
                et pellentesque arcu bibendum eleifend 
                <strong> elementum nec </strong>rutrum consectetum. Ultrices
                eleifend <strong>elementum nec </strong>.Ultrices eleifend elementum 
                nec rutrum consectetur.
            </p>


            <Button/>
            
        </div>
    )
}

export { SimpleBlock };