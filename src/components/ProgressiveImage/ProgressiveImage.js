import React, { useState, useEffect } from 'react';

const ProgressiveImage = ({ src, alt }) => {
  const placeholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP88uXzfwAJmwPcIxkqXgAAAABJRU5ErkJggg==';
  const [imgSrc, setImageSrc] = useState(placeholder);
  const [imgRef, setImageRef] = useState();

  useEffect(() => {
    let observer;
    let didCancel = false;
    
    if (imgRef && imgSrc === placeholder) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              // when image is visible in the viewport + rootMargin
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src)
              }
            })
          },
          {
            threshold: 0.01,
            rootMargin: "75%",
          }
        )
        observer.observe(imgRef)
      } else {
        // Old browsers fallback
        setImageSrc(src)
      }
    }
    return () => {
      didCancel = true
      // on component unmount, we remove the listner
      if (observer && observer.unobserve) {
        observer.unobserve(imgRef)
      }
    }
  }, [imgRef, imgSrc, src]);
  return <img ref={setImageRef} src={imgSrc} alt={alt} />
};

export default ProgressiveImage;