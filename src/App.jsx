import React, { useState } from 'react';
import Items from './components/Items.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Categories from './components/Categories.jsx';

export default function App() {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState([
    {
      id: 1, 
      name: "Brazilian Bourbon",
      img:"coffee.png",
      desc:"lorem",
      country: "Brazil", 
      weight: "200 g",
      category: "beans",
      price:"10"
    },

    {
      id: 2, 
      name: "Malabar Monsoon",
      img:"coffee.png",
      desc:"lorem",
      country: "India", 
      weight: "200 g",
      category: "beans",
      price:"10"
    },

    {
      id: 3, 
      name: "Kopi Luwak",
      img:"coffee.png",
      desc:"lorem",
      country: "Indonesia", 
      weight: "200 g",
      category: "beans",
      price:"10"
    },

        {
      id: 4, 
      name: "Kopi Luwak",
      img:"coffee.png",
      desc:"lorem",
      country: "Indonesia", 
      weight: "200 g",
      category: "beans",
      price:"10"
    },

        {
      id: 5, 
      name: "Kopi Luwak",
      img:"coffee.png",
      desc:"lorem",
      country: "Indonesia", 
      weight: "200 g",
      category: "beans",
      price:"10"
    },

        {
      id: 6, 
      name: "Kopi Luwak",
      img:"coffee.png",
      desc:"lorem",
      country: "Indonesia", 
      weight: "200 g",
      category: "beans",
      price:"10"
    },
  ])

//Remove from cart function
  const deleteOrder = (id) => {
    setOrders(orders.filter(el => el.id !== id))
  }

//Add to cart function  
    const addToOrder = (item) => {
      setOrders(prevOrders => {
        const existing = prevOrders.find(el => el.id === item.id);
        if (existing) {
          return prevOrders.map(el => 
            el.id === item.id ? { ...el, count: el.count + 1 } : el
          );
        } else {
          return [...prevOrders, { ...item, count: 1}];
        }
      });
  }

  //Items filter function
  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) 
  );



  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder}/>
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <Categories chooseCategory={chooseCategory}/>
      <Items items={items} onAdd={addToOrder} />
      <Footer />
    </div>    
  )
}

const chooseCategory = (category)  => {
  console.log(category);
}
//<Categories chooseCategory={chooseCategory} />