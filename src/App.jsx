import ItemPage from './components/ItemPage.jsx';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      desc:"A rich Brazilian coffee with caramel notes",
      country: "Brazil", 
      weight: "200 g",
      category: "beans",
      price:"10"
    },

    {
      id: 2, 
      name: "Malabar Monsoon",
      img:"coffee.png",
      desc:"Indian coffee aged in monsoon winds for unique flavor",
      country: "India", 
      weight: "200 g",
      category: "beans",
      price:"10"
    },

    {
      id: 3, 
      name: "Kopi Luwak",
      img:"coffee.png",
      desc:"Famous Indonesian coffee with smooth earthy taste",
      country: "Indonesia", 
      weight: "200 g",
      category: "beans",
      price:"50"
    },

        {
      id: 4, 
      name: "Arabica Classic",
      img:"coffee.png",
      desc:"Classic Arabica blend from Colombia",
      country: "Colombia", 
      weight: "200 g",
      category: "beans",
      price:"10"
    },

        {
      id: 5, 
      name: "Ethiopian Yirgacheffe",
      img:"coffee.png",
      desc:"Floral and fruity Ethiopian beans",
      country: "Ethiopia", 
      weight: "200 g",
      category: "beans",
      price:"10"
    },

        {
      id: 6, 
      name: "Vietnam Robusta",
      img:"coffee.png",
      desc:"Strong and bold Vietnamese coffee",
      country: "Vietnam", 
      weight: "200 g",
      category: "beans",
      price:"10"
    },
  ])
    /*
    //  API Example
    useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(res => res.json())
      .then(data => {
      
        const transformed = data.map(item => ({
          id: item.id,
          name: item.title,
          img: item.image, 
          desc: item.description,
          country: "Unknown", 
          weight: "200 g",
          category: "hot",
          price: Math.floor(Math.random() * 10 + 5) 
        }));
        setItems(transformed);
      })
      .catch(err => console.error(err));
  }, []);
  */

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
          const { desc, ...itemWithoutDesc } = item;
          return [...prevOrders, { ...itemWithoutDesc, count: 1}];
        }
      });
  }

  //Items filter function
  const chooseCategory = (category) => console.log(category);
  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  return (
      <Router>
      <Header orders={orders} onDelete={deleteOrder}/>
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="wrapper">
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
              <Items items={filteredItems} onAdd={addToOrder} />
              <Footer />
            </div>
          } 
        />

        <Route 
          path="/item/:id" 
          element={<ItemPage items={items} onAdd={addToOrder} />} 
        />
      </Routes>
    </Router>
  
  )
}
