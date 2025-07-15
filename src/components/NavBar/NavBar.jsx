import "./navbar.css";
import corsairLogo from "../../assets/logo-empilchados.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={corsairLogo} alt="" />
      </Link>

      <ul className="categories">
        <li>
          <Link to="/category/remeras" className="category" >Remeras</Link>
        </li>
        <li>
          <Link to="/category/camperas" className="category" >Camperas</Link>
        </li>
        <li>
          <Link to="/category/pantalones" className="category" >Pantalones</Link>
        </li>
      </ul>

      <CartWidget />
    </div>
  )
}

export default NavBar;