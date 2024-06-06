import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Button.css';

export function Button(props) {
    

    return (
        <>
            <button className='button-more'>
                En savoir plus  <FontAwesomeIcon icon={faArrowRight} />
            </button>
            
        </>
    )
}
