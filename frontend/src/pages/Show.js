import { useState, useEffect, useRef } from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import "../Show.css";

export default function Show(props) {
  const [item, setItem] = useState({});

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/merchant/${props.match.params.id}`
      );
      const data = await response.json();
      setItem(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
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
      <h1 className="showHeader">{item.productName}</h1>
      <br />
      <ul className="showUl">
        <br />
        <img src={item.img} className="showListImgs" />
        <li key={item._id} className="showJewels">
          <br />
          {item.description}
          <br />
          Price: ${item.price}.00
          <br />
          <Link to={"/checkout"}>
            <button id="showBtn">Add to cart</button>
          </Link>
        </li>
      </ul>
      <br />
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
