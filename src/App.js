import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from'./Pages/Shop';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kid"/>}/>
        <Route path='/Product' element={<Product/>}>
           <Route path='productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<cart/>}/>
        <Route path='/Login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
