import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

const Order = ({ item, onDelete }) => {
    return (
        <div className='item'>
            <img src={"/img/" + item.img} />
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
            <p>{item.country}</p>
            <p>{item.weight}</p>
            <b>{item.price}€ * {item.count || 1}</b>
            <FaTrash className='delete-icon' onClick={() => onDelete(item.id)} />
            </div>
    )
    }


export default Order