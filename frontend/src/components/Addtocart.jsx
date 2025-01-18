import React, { useState } from 'react'
import { useMenu } from '../context/Context'
import './cart.css'
import { FaTrash } from "react-icons/fa6";
import Cartqnt from './Cartqnt';
import { NavLink } from 'react-router-dom';

function Addtocart() {

const {cart, removeItem, setIncrease, setDecrease, total_price, charge} = useMenu();

// const [quantity,setQuantity] = useState(1);

const handleRemoveFromCart = (itemId) => {
    removeItem(itemId);
  };


// const setDecrease = () => {
//      quantity > 1  ? setQuantity(quantity - 1): setQuantity(1)
// }

// const setIncrease = () => {
//     setQuantity(quantity + 1)
// }

  return (
    <>
    
<div className="cart-container">
  {cart.length > 0 ? (
    <div className="cart-tbl">
      <h2>Your Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                </div>
              </td>
              <td>{item.price} taka</td>
              <td>
                <Cartqnt
                  setDecrease={() => setDecrease(item.id)}
                  quantity={item.quantity ? item.quantity : 1}
                  setIncrease={() => setIncrease(item.id)}
                />
              </td>
              <td>{(item.price * item.quantity || item.price).toFixed(2)} taka</td>
              <td>
                <button className='rmv' onClick={() => handleRemoveFromCart(item.id)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr></hr>
      <div className="total-price">
        <p>Subtotal: {total_price} taka</p>
        <p className='delivery'>Delivery charge: {charge} taka</p>
        <p className='total'>Order Total: {total_price + charge} taka</p>
      </div>
      <NavLink className='ordr' to='/order'><button>Place Order</button></NavLink>
    </div>
    
  ) : (
    <p className='empty'>Your cart is empty.</p>
  )}
</div>

   
    
    
    </>
  )
}

export default Addtocart