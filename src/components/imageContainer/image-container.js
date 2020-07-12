import React, { useState } from "react";
import "./image-container.css";

const ImageContainer = props => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div 
      className={`image-container ${!imgLoaded && 'image-container--loading'}`}
      data-ratio={!imgLoaded && '16:9'}
    >
      <div>
        <img
          src={props.src}
          alt={props.alt}
          onLoad={() => setImgLoaded(true)}
        />
      </div>
    </div>
  );
};

export default ImageContainer;