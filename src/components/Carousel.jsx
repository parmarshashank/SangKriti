// src/components/Carousel.jsx
import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const slides = [
    {
      image: '/images/slide1.jpg', 
      description: 'Join and express yourself in the community',
    },
    {
      image: '/images/slide2.jpg',
      description: 'Host and attend cultural workshops and events',
    },
    {
      image: '/images/slide3.png',
      description: 'Uncover the beauty of traditional architecture and intricate carvings of heritage sites.',
    },
    {
      image: '/images/slide4.png',
      description: 'Explore the heritage and culture near you',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); 
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden mt-0">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-96 flex justify-center items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute bottom-0 bg-black bg-opacity-50 w-full p-4">
              <p className="text-white text-lg text-center">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
