
import './App.css';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCaategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Contact from './Components/contact/contact';
import About from './Components/about/about'
import Shipping from './Components/shipping/shipping'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Kings' element={<ShopCategory banner={men_banner} category="Kings"/>}/>
        <Route path='/Queens' element={<ShopCategory banner={women_banner} category="Queens"/>}/>
        <Route path='/Accessories' element={<ShopCategory banner={kid_banner} category="Accessories"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/about' element={<About/>}/> 
        <Route path='/shipping' element={<Shipping/>}/> 
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
