import { useState, useEffect, useRef } from "react";

import "./App.css";
import ProductForm from "./Form";

function App() {
  const [items, setItems] = useState([]);

  /////////
  //Read
  /////////
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/merchant");
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  /////////
  //Delete
  /////////
  const deleteItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/merchant${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      const filteredItems = items.filter((item) => item._id !== data._id);
      setItems(filteredItems);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Form</h1>
        <ProductForm updateItems={setItems} items={items} />
        <ul>
          {items.map((item) => {
            return (
              <li key={item._id} class="posts">
                {item.productName}
                <br />
                <button
                  onClick={(event) => {
                    deleteItem(item._id);
                  }}
                >
                  DELETE{item.productName}
                </button>
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
