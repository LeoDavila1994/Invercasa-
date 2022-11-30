import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, Viviendas, Inversiones, Venta } from "../src/pages";
import './App.css'



function App() {


  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/viviendas" element={<Viviendas />}/>
        <Route path="/inversiones" element={<Inversiones />}/>
        <Route path="/venta" element={<Venta />}/>
      </Routes>
    </HashRouter>
  )
}

export default App
