import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./routes/Home"
import About from "./routes/About"
import Contact from "./routes/Contact"
import Products from "./routes/Products"

const App = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/products" element={<Products/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App