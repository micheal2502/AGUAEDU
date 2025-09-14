import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Service/Service";
import Contact from "./pages/Contact/Contact";


const App = () => {
  return (
    <Router>
      {/* Navbar cố định đầu trang */}
      <Navigation />

      {/* Routes */}
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
