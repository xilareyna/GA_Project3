import { useState, useEffect, useRef } from "react";
import "./App.scss";
import ProductForm from "./components/Form";

import { Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [items, setItems] = useState([]);

  /////////
  //Read
  /////////
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://git.heroku.com/xila-jewelry-app.git/merchant"
      );
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
      const response = await fetch(
        `https://git.heroku.com/xila-jewelry-app.git/merchant/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
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
    <div id="App">
      <header className="App-header">
        <ul className="ulHeader">
          <li className="headerLi">
            <Link to={"/"} className="headerLinks">
              Jewelry
            </Link>
          </li>

          <li className="headerLi">
            <Link to={"/about"} className="headerLinks">
              About
            </Link>
          </li>
          <li className="headerLi">
            <Link to={"/checkout"} className="headerLinks">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </li>
        </ul>

        <h1 id="homeTitle">Xila Jewelry</h1>
      </header>
      <ul>
        {items.map((item) => {
          return (
            <li key={item._id} class="posts">
              <Link to={item._id} className="productTitleLink">
                {item.productName}
              </Link>
              <br />
              <img src={item.img} class="listImgs" />
              <br /> <span id="postPrice">${item.price}.00</span>
              {/* {item.productType}
              <br /> */}
              <br />
              {/* <button
                onClick={(event) => {
                  deleteItem(item._id);
                }}
              >
                DELETE {item.productName} */}
              {/* </button> */}
              <Link to={"/checkout"}>
                <button>Add to cart</button>
              </Link>
            </li>
          );
        })}
      </ul>
      <footer id="homeFooter">
        Give us a shout!✨
        <br />
        <i className="fas fa-phone-square-alt" id="contactIcons" />
        555-5555
        <i className="fas fa-envelope-square" id="contactIcons" />
        Xila@Jewelry.com
      </footer>
    </div>
  );
}

export default App;
