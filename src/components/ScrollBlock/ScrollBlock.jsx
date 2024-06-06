import React, { useRef } from 'react';
import './ScrollBlock.css';

function ScrollBlock() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="horizontal-scroll-container">
        <div className="horizontal-scroll" ref={scrollRef}>
            <div className="blockUnique">
                <span>01</span>
                <h2>Radio rétro-alvéolaire numérique</h2>
                <p>
                    Vitae volutpat commodo velit vel donec mus nisl eleifend tincidunt. 
                    Scelerisque at et pellentesque arcu bibendum. Eleifend elementum nec 
                    rutrum consectetur cursus eleifend. Scelerisque at et pellentesque 
                    arcu bibendum. Ultrices elementum nec.
                </p>
            </div>
            <div className="block">
                <img
                    src={process.env.PUBLIC_URL + '/dent.svg'}
                    alt="Logo de l'application"
                    className="logo-img"
                />
                <div className='info'>
                    <span>02</span>
                    <h2>Empreinte optique par caméra</h2>
                </div>
            </div>
            <div className="block">
                <img
                    src={process.env.PUBLIC_URL + '/dent.svg'}
                    alt="Logo de l'application"
                    className="logo-img"
                />
                <div className='info'>
                    <span>03</span>
                    <h2>Loupes Binoculaires</h2>
                </div>
            </div>
        </div>
    
        <div>
            <button className="scroll-button left" onClick={scrollLeft}>‹</button>
            <button className="scroll-button right" onClick={scrollRight}>›</button>
        </div>

    </div>
  );
}

export default ScrollBlock;
