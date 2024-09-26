import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Products.css';
import drinka from '../../assets/md1.jpeg';
import drinkb from '../../assets/md2.jpeg';
import drinkc from '../../assets/md3.jpg';
import drinkd from '../../assets/masualt.png';
import drinke from '../../assets/mblue.webp';
import drinkg from '../../assets/mbrown.png';
import drinkh from '../../assets/mgreen.webp';
import drinki from '../../assets/mpink.png';
import drinkj from '../../assets/mred.webp';
import drinkk from '../../assets/msky.png';
import drinkl from '../../assets/myellow.png';
import drinkm from '../../assets/md4.jpg';
import drinkn from '../../assets/md5.jpeg';
import drinko from '../../assets/md6.jpeg';
import drinkp from '../../assets/md7.jpeg';
import exbg from '../../assets/prdbg.png';
import CartBox from '../CartBox/CartBox';
import carticon from '../../assets/cart_icon.png';

const Products = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const exclusiveRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollToExclusive) {
      exclusiveRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const products = [
    { id: 1, name: 'Drink A', image: drinka, price: 2.5 },
    { id: 2, name: 'Drink B', image: drinkb, price: 3.0 },
    { id: 3, name: 'Drink C', image: drinkc, price: 2.8 },
    { id: 4, name: 'Drink D', image: drinkd, price: 2.2 },
    { id: 5, name: 'Drink E', image: drinke, price: 3.1 },
    { id: 6, name: 'Drink G', image: drinkg, price: 3.0 },
    { id: 7, name: 'Drink H', image: drinkh, price: 2.7 },
    { id: 8, name: 'Drink I', image: drinki, price: 3.5 },
    { id: 9, name: 'Drink J', image: drinkj, price: 2.6 },
    { id: 10, name: 'Drink K', image: drinkk, price: 3.3 },
    { id: 11, name: 'Drink L', image: drinkl, price: 2.4 },
  ];

  const exclusive = [
    { id: 12, name:'Drink M', image: drinkm, price: 3.5},
    { id: 13, name:'Drink N', image: drinkn, price: 3.5},
    { id: 14, name:'Drink O', image: drinko, price: 3.5},
    { id: 15, name:'Drink P', image: drinkp, price: 3.5},
  ];

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems];
    const itemIndex = updatedCartItems.findIndex(cartItem => cartItem.name === product.name);

    if (itemIndex >= 0) {
      updatedCartItems[itemIndex].quantity += 1;
    } else {
      updatedCartItems.push({ ...product, quantity: 1 });
    }

    setCartItems(updatedCartItems);
    setIsCartOpen(true);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="products-container">
      <h1 className='h2'>List of All Products of Monster Energy Drink </h1>

      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h1 className='extlt' ref={exclusiveRef}>Check Our Editions</h1>
      <div className="exclusive-grid">
        {exclusive.map(product => (
          <div key={product.id} className="exclusive-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <img src={exbg} alt="" className="exbg" />
      <img src={carticon} alt="Cart" className="cart-icon" onClick={toggleCart} />

      {isCartOpen && (
        <CartBox cartItems={cartItems} setCartItems={setCartItems} onClose={closeCart} />
      )}
    </div>
  );
}

export default Products;
