import React, { useRef, useState, useEffect } from 'react';
import './ScrollBlock.css';

function ScrollBlock() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const blocks = [
    {
      number: "01",
      title: "Radio rétro-alvéolaire numérique",
      content: "Vitae volutpat commodo velit vel donec mus nisl eleifend tincidunt. Scelerisque at et pellentesque arcu bibendum. Eleifend elementum nec rutrum consectetur cursus eleifend. Scelerisque at et pellentesque arcu bibendum. Ultrices elementum nec."
    },
    {
      number: "02",
      title: "Empreinte optique par caméra",
      content: ""
    },
    {
      number: "03",
      title: "Loupes Binoculaires",
      content: ""
    }
  ];

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

  const handlePaginationClick = (index) => {
    if (scrollRef.current) {
      const blockWidth = scrollRef.current.scrollWidth / blocks.length;
      scrollRef.current.scrollTo({ left: blockWidth * index, behavior: 'smooth' });
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const blockWidth = scrollRef.current.scrollWidth / blocks.length;
        const currentIndex = Math.round(scrollLeft / blockWidth);
        setCurrentIndex(currentIndex);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [blocks.length]);

  return (
    <div className="horizontal-scroll-container">
      <div className="horizontal-scroll" ref={scrollRef}>
        {blocks.map((block, index) => (
          <div key={index}>
            {block.number === "01" ? (
              <div className="blockUnique">
                <span>{block.number}</span>
                <h2>{block.title}</h2>
                <p>{block.content}</p>
              </div>
            ) : (
              <>
              <div className='block'>

                <img
                    src={process.env.PUBLIC_URL + '/dent.svg'}
                    alt="Logo de l'application"
                    className="logo-img"
                    />
                    <div className='info'>
                    <span>{block.number}</span>
                    <h2>{block.title}</h2>
                </div>

              </div>

              </>
            )}
          </div>
        ))}
      </div>
      <div className='pagination'>
        <button className="scroll-button left" onClick={scrollLeft}>‹</button>
        <div className='circle'></div>
        <div className="current-index big-circle">
            {blocks[currentIndex].number}
        </div>
        <div className='circle'></div>
        <button className="scroll-button right" onClick={scrollRight}>›</button>
      </div>


    </div>
  );
}

export default ScrollBlock;
