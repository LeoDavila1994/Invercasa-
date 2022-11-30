import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, About, Households, Investments, Sales, Contact } from "./pages";
import { Navbar } from "./components"
import './App.css'



function App() {


  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sobre_nosotros" element={<About />}/>
        <Route path="/viviendas" element={<Households />}/>
        <Route path="/inversiones" element={<Investments />}/>
        <Route path="/venta" element={<Sales />}/>
        <Route path="/contacto" element={<Contact />}/>
      </Routes>
    </HashRouter>
  )
}

export default App
