import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../../Styles/styles.css';

function Body() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['https://lh5.googleusercontent.com/p/AF1QipN5gz_v-wuTGZrN-vPwEmpi5fSG5VxoWfMaNWAo=w594-h343-n-k-no','https://lh5.googleusercontent.com/p/AF1QipNaQ1SZnIKTduoRA8gG4NgMV3wNmn36Xnji2Oro=w594-h343-n-k-no','https://lh5.googleusercontent.com/p/AF1QipOkdCLlkSKAA1A_erqEgvNrEGnEEZSqgZlNC94x=w594-h343-n-k-no','https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQx04W6OVn9e8UpFuqX7UQJNqrSvH1WXKrP3S-dCnPK2NA-5xYuo8c89nNuYLR2zCNMYEH2516I3ePJZdmQxXpt7EO0aYJFAcLHuBNDxA']; // Add more image URLs as needed
  const intervalDuration = 2000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, []);
  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div>
      <div className="image-container">
        {images.map((image, index) => (
          <div key={index} className="image-wrapper" style={{ display: index === currentImage ? 'block' : 'none' }}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="blurry"
            />
            {index === currentImage && (
              <div className="image-text">Welcome to A2Z Travel Plan</div>
            )}
          </div>
        ))}
      </div>
      <div className="dot-container">
        {images.map((image, index) => (
          <span
            key={index}
            className={index === currentImage ? 'dot active' : 'dot'}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;
