import React, { useState } from 'react';

const Cart = ({ items: initialItems, total: initialTotal }) => {
  const [items, setItems] = useState(initialItems);
  const [total, setTotal] = useState(initialTotal);
  const [checkoutDisabled, setCheckoutDisabled] = useState(false);

  const handleRemoveItem = itemId => {
    const updatedItems = items.filter(item => item.id !== itemId);
    setItems(updatedItems);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedItems = items.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const handleCheckoutClick = () => {
    setCheckoutDisabled(true);
    setTimeout(() => {
      alert("Checking out...");
      setCheckoutDisabled(false);
    }, 3000);
  };

  return (
    // <div >
    //   <h3>hello world</h3>
    // </div>
  
    
    <div>
      <h3>Your Cart</h3>
      <div>
        {items.map(item => (
          <div key={item.id}>
            {item.title} x {item.quantity} = {item.price * item.quantity}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            <input
              type="number"
              value={item.quantity}
              onChange={event =>
                handleQuantityChange(item.id, event.target.value)
              }
            />
          </div>
        ))}
      </div>
      <p>Total: {total}</p>
      <button disabled={checkoutDisabled} onClick={handleCheckoutClick}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
