import {Link} from "react-router-dom";
import "../styles/NavBar.css"

/* Source for swapping between mobile and desktop:  https://stackoverflow.com/questions/74169381/how-to-check-if-react-app-is-being-viewed-on-desktop-or-mobile?noredirect=1&lq=1 */

function Navbar() {
    return (
        <header className="page-header">

        { /* Desktop Navbar */ }
        <nav>
            <Link to={"/"}><img className="logo-header" src="/LouisD-Logo.svg"></img></Link>
            <ul className="nav-links">
                <li className="nav-link"><Link to={"/"}>Home</Link></li>
                <li className="nav-link"><Link to={"/smithsonian"}>Projects</Link></li>
                <li className="nav-link"><Link to={"/about"}>About</Link></li>
            </ul>
        </nav>

        </header>
    );
}

export default Navbar;