import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../pages/App";
import About from "../pages/About";
import Smithsonian from "../pages/Smithsonian";
import LouisD from "../pages/LouisD";
import MobileRouting from "../pages/MobileRouting";
import WonderButton from "../pages/WonderButton";
import SocietysPress from "../pages/SocietysPress";

function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/mobileRouting" element={<MobileRouting />} />
                <Route path="/about" element={<About />} />
                <Route path="/societys-press" element={<SocietysPress />} />
                <Route path="/smithsonian" element={<Smithsonian />} />
                <Route path="/wonderbutton" element={<WonderButton />} />,
                <Route path="/louisd" element={<LouisD />} />
            </Routes>
        </BrowserRouter>
    )
};

export default Router