import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/menu')
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} - ₹{item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;