import React from 'react';
import './CartBox.css';

const CartBox = ({ cartItems = [], setCartItems, onClose }) => {

  console.log('Cart Items:', cartItems);

  const handleQuantityChange = (index, change) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity += change;
    if (updatedItems[index].quantity <= 0) {
      updatedItems.splice(index, 1);
    }
    setCartItems(updatedItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0).toFixed(2);
  };

  const handleBuy = () => {
    alert('Thank you for your purchase!');
    setCartItems([]); // Clear cart after purchase
    onClose(); // Close CartBox after purchase
  };

  return (
    <div className={`cart-box ${cartItems.length > 0 ? 'visible' : ''}`}>
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
      {cartItems.length === 0 ? (
        <p className="empty-cart">No items in the cart</p>
      ) : (
        <div>
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <span>{item.name}</span>
                <span>${item.price} x {item.quantity}</span>
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                  <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-footer">
            <h3>Total: ${calculateTotal()}</h3>
            <button className="buy-btn" onClick={handleBuy}>Buy Now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartBox;
