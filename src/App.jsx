import About from "./components/About";
import EmployeeData from "./components/EmployeeData";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Routes , Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="container mx-auto p-4">
          <NavBar />
          <br />
          <Routes>
            <Route path="/" element={<EmployeeData />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <br />
          <Footer />
          
      </div>
    </>
  )
}

export default App
