import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <div className="app-container">
          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/detail/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<div>Error 404</div>} />
          </Routes>

        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App