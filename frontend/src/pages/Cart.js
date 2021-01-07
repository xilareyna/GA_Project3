import "../Cart.css";

import { Router, Switch, Route, Link } from "react-router-dom";

export default function Cart() {
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
            <i class="fas fa-shopping-cart"></i>
          </Link>
        </li>
      </ul>
      <h1 className="cartHeading">Shopping Cart</h1>
      <footer id="cartFooter">
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
