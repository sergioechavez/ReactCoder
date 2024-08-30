import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css"
import { Link,NavLink } from "react-router-dom";

const Navbar = () => {

    return(
        <nav className="navbar">

            <div className="navbar-logo">

                <Link className="logo" to="/">DrinkStore</Link>

            </div>

            <div className="navbar-contenedor">

                <ul className="navbar-links">
                    <li>
                        <Link to="/" className="link">INICIO</Link>
                    </li>
                    <li>
                        <Link to="/category/Jugos" className="link">JUGOS</Link>
                    </li>
                    <li>
                        <Link to="/category/Gaseosas" className="link">GASEOSAS</Link>
                    </li>
                    <li>
                        <Link to="/category/Cervezas" className="link">CERVEZAS</Link>
                    </li>
                    <li>
                        <Link to="/category/Vinos" className="link">VINOS</Link>
                    </li>
                    <li>
                        <Link to="/category/Snacks" className="link">SNACKS</Link>
                    </li>
                    <li>
                        <Link to="/Contacto" className="link">CONTACTO</Link>
                    </li>
                </ul>

            </div>

            <CartWidget />

        </nav>
    )
}

export default Navbar;