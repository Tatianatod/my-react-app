import React, { Component } from 'react'

const Item = ({ item, onAdd }) => {
    return (
        <div className='item'> 
            <img src={"/img/" + item.img} />
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
            <p>{item.country}</p>
            <p>{item.weight}</p>
            <b>{item.price}€</b>
            <div className='add-to-cart' onClick={() => onAdd(item)}>+</div>   
            </div>
    )
    }

export default Item