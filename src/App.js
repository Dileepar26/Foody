import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Menu" element={<Menu/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
