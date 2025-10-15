import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

const Order = ({ item, onDelete }) => {
    return (
        <div className='item'>
            <img src={"/img/" + item.img} />
            <h2>{item.name}</h2>
            <b>{item.price}€ * {item.count || 1}</b>
            <FaTrash className='delete-icon' onClick={() => onDelete(item.id)} />
            </div>
    )
    }

export default Order