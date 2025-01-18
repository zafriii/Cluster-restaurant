import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './Pages/Cart';
import Order from './Pages/Order';


function App() {
  
  return (
    <>
   

   <BrowserRouter>

   <Navbar/>

      <Routes>                

          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/menu' element={<Menu/>}/> 
          <Route path='/cart' element={<Cart/>}/> 
          <Route path='/order' element={<Order/>}/>                                  

      </Routes>    

    <Footer/>    

   </BrowserRouter>


    </>
  )
}

export default App
