import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Company from "./components/pages/Company";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Container from "./layout/Container";
import Projects from "./components/pages/Projects";


function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/project" element={<Projects />} />
      </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
