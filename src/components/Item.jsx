import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Item = ({ item, onAdd }) => {
    const[isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="item p-4 bg-white shadow-md rounded-lg text-center relative">
      <Link to={`/item/${item.id}`}>
        <img src={"/img/" + item.img} alt={item.name} className="w-32 h-32 object-cover mb-4 mx-auto" />
        <h2>{item.name}</h2>
      </Link>
      <p>{item.country}</p>
      <b>{item.price}€</b>

      <div className='add-to-cart' onClick={() => onAdd(item)}>+</div>   

      <button
        onClick={() => setIsFavorite(!isFavorite)}
          className={`absolute top-2 right-2 text-2xl p-1 rounded-full transition-colors`}
        style={{
          color: isFavorite ? 'white' : 'white', 
          WebkitTextStroke: isFavorite ? '0px' : '1px black', 
          backgroundColor: isFavorite ? '#7f1d1d' : 'transparent' 
        }}

          >
        ♥
            
      </button>
    </div>
  );
};

export default Item;   