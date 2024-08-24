import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AboutPage from "./Pages/AboutPage";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServicesPage from "./Pages/ServicesPage";
import Portfoliopage from "./Pages/Portfoliopage";
import ContactPage from "./Pages/ContactPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Services" element={<ServicesPage />} />
          <Route path="/Portfolio" element={<Portfoliopage />} />
          <Route path="/Contact" element={<ContactPage />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
