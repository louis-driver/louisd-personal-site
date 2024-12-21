import {Link} from "react-router-dom";
import "../styles/NavBar.css"
import { useEffect, useState } from "react";
import Logo from "./Logo";

/* Source for swapping between mobile and desktop:  https://stackoverflow.com/questions/74169381/how-to-check-if-react-app-is-being-viewed-on-desktop-or-mobile?noredirect=1&lq=1 */

function Navbar() {

    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' && window.innerWidth < 820
    );
    
    useEffect(() => {
        function handleResize() {
          setIsMobile(window.innerWidth < 820);
        }
    
        if (typeof window !== 'undefined') {
          handleResize();
        }
    
        window.addEventListener('resize', handleResize);
        return () => {
          // remove event listener when the component is unmounted to not cause any memory leaks
          // otherwise the event listener will continue to be active
          window.removeEventListener('resize', handleResize);
        };
    // add `isMobile` state variable as a dependency so that
    // it is called every time the window is resized
    }, [isMobile]);

    return (
        <header className="page-header">

            { /* Desktop Navbar */ }
            { !isMobile &&
                <nav>
                    <Link to={"/"}><Logo /></Link>
                    <ul className="nav-links">
                        <li className="nav-link"><Link to={"/"}>Home</Link></li>
                        <li className="nav-link"><Link to={"/smithsonian"}>Smithsonian</Link></li>
                        <li className="nav-link"><Link to={"/wonderbutton"}>WonderButton</Link></li>
                        <li className="nav-link"><Link to={"/louisd"}>This Website</Link></li>
                    </ul>
                </nav>
            }  

            { /* Mobile Navbar */}
            { isMobile &&
                <nav>
                    <Link to={"/mobileRouting"}><Logo /></Link>
                </nav>
            }

        </header>
    );
}

export default Navbar;