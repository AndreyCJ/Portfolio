import React, { useState } from 'react';
import './image-container.css';

import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const ImageContainer = props => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [setRef, visible] = useIntersectionObserver({ rootMargin: '200px' });

  return (
    <div 
      className={`image-container ${!imgLoaded && 'image-container--loading'}`}
      data-ratio={!imgLoaded && '16:9'}
      
    >
        <div ref={setRef}>
          <img
            
            className="image-product"
            src={visible || imgLoaded ? props.src : ''}
            alt={props.alt}
            onLoad={() => setImgLoaded(true)}
            style={{display: `${!imgLoaded ? 'none' : 'block'}`}}
          />
        </div>
    </div>
  );
};

export default ImageContainer;