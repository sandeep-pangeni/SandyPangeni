import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Components/Home/index";
import About from "./Components/About/index";
import Contact from "./Components/Contact/index";
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
