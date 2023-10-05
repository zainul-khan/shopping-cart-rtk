// Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../slices/cartToggler';
import { removeFromCart } from '../slices/cartItems';
import './Cart.css'


const Cart = () => {
  const cart = useSelector(state => state.cart);


  const dispatch = useDispatch();

  // ...

  const closeCart = () => {
    dispatch(toggleCart())
  }

  const handleRemoveFromCart = (val) => {
    try {
      dispatch(removeFromCart(val.product))
    } catch (error) {
      console.log("error", error);
    }
  }

  const totalPrice = cart.reduce((total, item) => {
    return total + (item.product.price * item.quantity);
  }, 0);


  return (
    <div className='cart open'>
      {/* ...cart content */}
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button onClick={closeCart} className="btn">
          X
        </button>
      </div>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.product.id} className="cart-item">
            <p>Name: ${item.product.title}</p>
            <p>Price: ${item.product.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Subtotal: ${item.product.price * item.quantity}</p>
            <button onClick={() => handleRemoveFromCart(item)} className='btn btn-dark my-2'>
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <p>Total Price: {totalPrice}</p>
      </div>
    </div>
  );
};

export default Cart;
