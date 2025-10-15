import React from "react"; 
import { useParams, Link } from "react-router-dom";

export default function ItemPage({ items, onAdd }) {
  const { id } = useParams();
  const item = items.find(el => el.id === Number(id));

  if (!item) {
    return (
      <div className="text-center mt-10">
        <h2>Item not found </h2>
        <Link to="/" className="text-blue-500 underline">Back to catalog</Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6 text-center bg-white shadow-md rounded-lg mt-10">
      <img src={"/img/" + item.img} alt={item.name} className="w-48 h-48 mx-auto mb-4 object-cover" />
      <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
      <p className="text-gray-600 mb-2">{item.desc}</p>
      <p><b>Country:</b> {item.country}</p>
      <p><b>Weight:</b> {item.weight}</p>
      <p className="text-lg mt-2"><b>Price:</b> {item.price}€</p>

      <button 
        onClick={() => onAdd(item)} 
        className="mt-4  bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-black transition">
        Add to Cart
      </button>

      <div className="mt-4">
        <Link to="/" className="text-bg-900 underline">← Back to catalog</Link>
      </div>
    </div>
  );
}