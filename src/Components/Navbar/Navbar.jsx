import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo1.png';
import navshape from '../../assets/shape1.png';
import ximage from '../../assets/navshape1.png';

const Navbar = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('US');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const countryList = data.map(country => ({
          name: country.name.common,
          code: country.cca2,
        }));
        setCountries(countryList);
      })
      .catch(error => console.error('Error fetching countries:', error)); // Error handling
    
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false); 
      } else {
        setIsVisible(true); // Show when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleHomeClick = () => {
    window.location.href = '/';
  };

  return (
    <nav className={`navsec ${isVisible ? 'visible' : 'hidden'}`}>
      <img src={navshape} alt="" className="navshape" />
      <img src={logo} alt="" className="logo" />
      <img src={ximage} alt="" className="ximage" />

      <ul>
        <li onClick={handleHomeClick}>Home</li>
        <li><a href="/store" className='navli'>Store</a></li>
        <li><a href="/products" className='navli'>Products</a></li>
        <li><a href="/promotions" className='navli'>Promotions</a></li>
        <li><a href="/contacts" className='navli'>Contact</a></li>
      </ul>

      <div className="ctyselect">
        <i className='bx bx-globe lang'></i>
        <select
          value={selectedCountry}
          onChange={e => setSelectedCountry(e.target.value)}
          className="country-dropdown"
        >
          {countries.map(country => (
            <option key={country.code} value={country.code} className="country-option">
              {country.name}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
