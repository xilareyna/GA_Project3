import { Router, Switch, Route, Link } from "react-router-dom";

import "../About.css";

export default function About(props) {
  return (
    <div id="aboutDiv">
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
      <body id="aboutBody">
        <h1 id="aboutH">Welcome to Xila Jewelry!</h1>
        <p id="aboutP">
          At XJ, we not only hand-make all of our jewelry, we handpick all of
          our materials. Our gemstones are carefully selected from trusted
          providers worldwide and our metals are sourced only in the United
          States. Making smart, transparent choices with our materials is part
          of our promise to give you only the real deal. It’s also one way we
          are able to provide high-quality pieces at an affordable price.
        </p>
      </body>
      <footer id="homeFooterAbout">
        Give us a shout!✨
        <br />
        <i className="fas fa-phone-square-alt" id="contactIconsAbout" />
        555-5555
        <i className="fas fa-envelope-square" id="contactIconsAbout" />
        Xila@Jewelry.com
      </footer>
    </div>
  );
}
