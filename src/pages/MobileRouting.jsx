import { Link } from "react-router-dom";
import "../styles/MobileRouting.css";

function MobileRouting() {
    return (
        <main>
            <ul className="nav-links">
                <li className="nav-link"><Link to={"/"}>Home</Link></li>
                <li className="nav-link"><Link to={"/smithsonian"}>Smithsonian</Link></li>
                <li className="nav-link"><Link to={"/louisd"}>This Website</Link></li>
            </ul>
        </main>
    );
}

export default MobileRouting;