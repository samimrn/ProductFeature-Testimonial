
import './App.css';
import ProductFeatures from './components/ProductFeatures';
import Testimonial from './components/Testimonial';
import Contact from './pages/Contact';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <ProductFeatures/>
      <Testimonial/>
      <Error/>
      <Contact/>
    </div>
  );
}

export default App;
