import React, { useState } from 'react';
import './Drinks.css';
import drink1 from '../../assets/masualt.png';
import drink2 from '../../assets/mblue.webp';
import drink3 from '../../assets/mbrown.png';
import drink4 from '../../assets/mgreen.webp';
import drink5 from '../../assets/mpink.png';
import drink6 from '../../assets/msky.png';
import bg from '../../assets/bg.jpg';
import stamp from '../../assets/stamp.png';
import carticon from '../../assets/cart_icon.png';
import CartBox from '../CartBox/CartBox';

const Drinks = () => {
  const [cartItems, setCartItems] = useState([]); // State to manage cart items
  const [isCartOpen, setIsCartOpen] = useState(false); // State to manage CartBox visibility

  const addToCart = (item) => {
    const updatedCartItems = [...cartItems];
    const itemIndex = updatedCartItems.findIndex(cartItem => cartItem.name === item.name);

    if (itemIndex >= 0) {
      updatedCartItems[itemIndex].quantity += 1;
    } else {
      updatedCartItems.push({ ...item, quantity: 1 });
    }

    setCartItems(updatedCartItems);
    setIsCartOpen(true); // Open the cart when an item is added
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen); // Toggle CartBox visibility
  };

  const closeCart = () => {
    setIsCartOpen(false); // Explicitly close the CartBox
  };

  return (
    <div className='drinks-box'>
      <img src={stamp} alt="" className='stamp' />

      <img src={carticon} alt="" className='carticon' onClick={toggleCart} /> {/* Cart icon click toggles CartBox */}

      <div className={isCartOpen ? "cart-box visible" : "cart-box"}>
        <CartBox 
          cartItems={cartItems} 
          setCartItems={setCartItems} 
          onClose={closeCart} // Pass the closeCart function to close the CartBox
        />
      </div>

      <div className="vignette">
        <img src={bg} alt="" className='bg' />  
      </div>
               
      <h1 className='head'><span>Energy</span>Drinks</h1>

      <div className="drinks">
        <div className="item1">
          <img src={drink1} alt="" className='drink1' />
          <h3> New Asualt Drink </h3>
          <h3> 2.25$ </h3>
          <button className='btn1' onClick={() => addToCart({ name: 'New Asualt Drink', price: 2.25 })}>Add to cart</button>
        </div>

        <div className="item2">
          <img src={drink2} alt="" className='drink2' />
          <h3> New Blue Drink </h3>
          <h3> 2.25$ </h3>
          <button className='btn1' onClick={() => addToCart({ name: 'New Blue Drink', price: 2.25 })}>Add to cart</button>
        </div>

        <div className="item3">
          <img src={drink3} alt="" className='drink3' />
          <h3> New Brown Drink </h3>
          <h3> 2.25$ </h3>
          <button className='btn1' onClick={() => addToCart({ name: 'New Brown Drink', price: 2.25 })}>Add to cart</button>
        </div>

        <div className="item4">
          <img src={drink4} alt="" className='drink4' />
          <h3> New Green Drink </h3>
          <h3> 2.25$ </h3>
          <button className='btn1' onClick={() => addToCart({ name: 'New Green Drink', price: 2.25 })}>Add to cart</button>
        </div>

        <div className="item5">
          <img src={drink5} alt="" className='drink5' />
          <h3> New Pink Drink </h3>
          <h3> 2.25$ </h3>
          <button className='btn1' onClick={() => addToCart({ name: 'New Pink Drink', price: 2.25 })}>Add to cart</button>
        </div>

        <div className="item6">
          <img src={drink6} alt="" className='drink6' />
          <h3> New Red Drink </h3>
          <h3> 2.25$ </h3>
          <button className='btn1' onClick={() => addToCart({ name: 'New Red Drink', price: 2.25 })}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Drinks;
