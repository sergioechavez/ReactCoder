import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css"

const Navbar = () => {

    return(
        <nav className="navbar">

            <div className="navbar-logo">

                <p>MI LOGO</p>

            </div>

            <div className="navbar-links">

                <u>
                    <li>
                        <a href="#">INICIO</a>
                    </li>
                    <li>
                        <a href="#">GASEOSAS</a>
                    </li>
                    <li>
                        <a href="#">CERVEZAS</a>
                    </li>
                    <li>
                        <a href="#">VINOS</a>
                    </li>
                    <li>
                        <a href="#">CONTACTO</a>
                    </li>
                </u>

            </div>

            <CartWidget />

        </nav>
    )
}

export default Navbar;