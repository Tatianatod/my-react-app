import React, { useState } from 'react'

const Item = ({ item, onAdd }) => {
    const[isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="item p-4 bg-white shadow-md rounded-lg text-center relative"> 
            <img src={"/img/" + item.img} alt={item.name} className="w-32 h-32 object-cover mb-4 mx-auto" 
        />
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
            <p>{item.country}</p>
            <p>{item.weight}</p>
            <b>{item.price}€</b>
            <div className='add-to-cart' onClick={() => onAdd(item)}>+</div>   
            
            <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`absolute top-2 right-2 text-2xl transition-colors`}
                >
                {isFavorite ? "❤️" : "🤍"}
            </button> 
        </div>
    )
    }

export default Item