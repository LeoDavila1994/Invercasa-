import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "../src/pages";
import './App.css'



function App() {


  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </HashRouter>
  )
}

export default App
