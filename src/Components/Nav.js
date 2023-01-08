import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <Link to="/Home">Kim's Café Köln</Link>
            <ul>
                <li>
                    <Link to="/Speisekarte">Speisekarte</Link>
                </li>
                <li>
                    <Link to="/Kontakt">Kontakt</Link>
                </li>
                <li>
                    <Link to="/Öffnungszeiten">Öffnungszeiten</Link>
                </li>
                <li>
                    <Link to="/Galerie">Galerie</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;