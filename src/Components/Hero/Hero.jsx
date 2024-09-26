import React, { useState, useEffect } from 'react';
import './Hero.css';
import tyre from '../../assets/tyre.png';
import poster1 from '../../assets/poster1.png';
import poster2 from '../../assets/poster2.png';
import poster3 from '../../assets/poster3.png';
import poster4 from '../../assets/poster4.png';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [poster1, poster2, poster3, poster4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className='hero'>
      <img src={tyre} alt="Tyre" className='tyre' />
      <img src={images[currentIndex]} alt="Poster" className='hero-image' />


      <div className="read-sect">
        <h1 className='heading'>Monster Energy Drink - Unleash the Beast</h1><br></br>
        <h2 className='middle1'> Power Up Your Game</h2>
        <p className='para1'>Monster Energy isn't just a drink; it's your ultimate energy<br></br>
          boost. With caffeine, taurine, B vitamins, and ginseng, it's crafted to fuel your<br></br>
           body and mind for any challenge. </p>
           <br></br>
        <h2 className='middle2'> More Than a Drink </h2>   
        <p className='para2'>Monster Energy is a lifestyle. From extreme sports to epic music<br></br>
           festivals, Monster is there, pushing boundaries and living large. Join the Monster<br></br>
            family and live life to the fullest.</p><br></br>

        <button className='read-btn'> Read More </button>    

      </div>
    </div>

  );
}

export default Hero;

