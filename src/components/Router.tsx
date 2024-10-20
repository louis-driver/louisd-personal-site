import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../pages/App";
import About from "../pages/About";
import Smithsonian from "../pages/Smithsonian";
import LouisD from "../pages/LouisD";
import MobileRouting from "../pages/MobileRouting";

function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/mobileRouting" element={<MobileRouting />} />
                <Route path="/about" element={<About />} />
                <Route path="/smithsonian" element={<Smithsonian />} />
                <Route path="/louisd" element={<LouisD />} />
            </Routes>
        </BrowserRouter>
    )
};

export default Router