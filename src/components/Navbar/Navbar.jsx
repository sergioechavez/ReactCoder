import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css"

const Navbar = () => {

    return(
        <nav className="navbar">

            <div className="navbar-logo">

                <p>MI LOGO</p>

            </div>

            <div className="navbar-contenedor">

                <ul className="navbar-links">
                    <li>
                        <a href="#" className="link">INICIO</a>
                    </li>
                    <li>
                        <a href="#" className="link">GASEOSAS</a>
                    </li>
                    <li>
                        <a href="#" className="link">CERVEZAS</a>
                    </li>
                    <li>
                        <a href="#" className="link">VINOS</a>
                    </li>
                    <li>
                        <a href="#" className="link">CONTACTO</a>
                    </li>
                </ul>

            </div>

            <CartWidget />

        </nav>
    )
}

export default Navbar;