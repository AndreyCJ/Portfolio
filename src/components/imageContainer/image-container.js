import React, { useState, useRef } from 'react';
import './image-container.css';

import LazyLoad from 'react-lazyload';

const ImageContainer = props => {
  const [imgLoaded, setImgLoaded] = useState(false);  

  const refPlaceholder = useRef();

  const removePlaceholder = () => {
    setImgLoaded(true)
    refPlaceholder.current.remove();
  };

  return (
    <div className="image-container">
        <div ref={refPlaceholder} className="image-container--loading" style={{paddingBottom: "46.08%"}}></div>
        <div>
          <LazyLoad offset={200} once>
            <img
              className="image-product"
              src={props.src}
              alt={props.alt}
              onLoad={removePlaceholder}
              onError={removePlaceholder}
              style={{display: `${!imgLoaded ? 'none' : 'block'}`}}
            />
          </LazyLoad>
        </div>
    </div>
  );
};

export default ImageContainer;