import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Poster.css';
import drink1 from '../../assets/md5.jpeg';
import drink2 from '../../assets/md6.jpeg';
import drink3 from '../../assets/md7.jpeg';

const images = [drink1, drink2, drink3];

const Poster = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Hook to perform navigation

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Rotate images every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleCheckNowClick = () => {
    navigate('/products', { state: { scrollToExclusive: true } }); // Navigate with state to scroll
  };

  return (
    <div className='poster-sect'>
      <div className="poster-sect-main">
        <img src={images[currentIndex]} alt="" className="poster" />
      </div>
      <h1 className='label' onClick={handleCheckNowClick}>CHECK<br/>NOW!</h1>
    </div>
  );
}

export default Poster;
