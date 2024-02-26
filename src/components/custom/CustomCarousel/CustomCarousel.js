import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!images || images.length === 0) {
    return <div>No images to display</div>;
  }

  const renderImages = () => {
    const renderedImages = [];

    for (let i = 0; i < 3; i++) {
      const index = (currentImageIndex + i) % images.length;
      renderedImages.push(
        <img
          key={index}
          className={`image ${i === 1 ? 'center' : ''}`}
          src={images[index].image}
          alt={images[index].alt}
        />
      );
    }

    return renderedImages;
  };

  return (
    <div className="carousel">
      <button onClick={handlePrevClick}>&lt;</button>
      <div className="carousel-images">{renderImages()}</div>
      <button onClick={handleNextClick}>&gt;</button>
    </div>
  );
};

export default Carousel;
