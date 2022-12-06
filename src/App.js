
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProductFeatures from './components/ProductFeatures';
import Testimonial from './components/Testimonial';
import About from './pages/About';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Faq from './pages/Faq';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<ProductFeatures/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/faq' element={<Faq/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blog' element={<Blog/>}/>

          </Routes>
        </BrowserRouter>
     {/* <Header/> */}
      {/* <ProductFeatures/> */}
      {/* <Testimonial/> */}
      {/* <Error/> */}
      {/* <Contact/> */}
      {/* <Cart/> */}
      {/* <Checkout/> */}
    </div>
  );
}

export default App;
