import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../pages/App";
import About from "../pages/About";
import Smithsonian from "../pages/Smithsonian";

function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/smithsonian" element={<Smithsonian />} />
            </Routes>
        </BrowserRouter>
    )
};

export default Router