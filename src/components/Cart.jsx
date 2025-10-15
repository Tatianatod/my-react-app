import React from 'react';

export default function Cart({ orders, onDelete }) {
  return (
    <div>
      <h2>Cart</h2>
      {orders.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {orders.map(item => (
            <li key={item.id}>
              {item.name} x {item.count} 
              <button onClick={() => onDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}