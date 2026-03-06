import { useState } from 'react';

import './App.css'
import Card from './components/Card'
import CartCounter from './components/CartCounter';
import ProductList from './components/ProductList';
import SearchInput from './components/SearchInput';


function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(product){
    setCartItems((prev) => [...prev, product])
  }

  return (
    <div className="app">
      <header>
        <h1>Tienda Coder</h1>
        <Card
          title="Busqueda"
        >
          <SearchInput />
        </Card>
        <Card title="Carrito">
          <p>Items en el carrito: <strong>{cartItems.length}</strong></p>
        </Card>
      </header>

      <main>
        <ProductList onAddToCart={handleAddToCart} />
      </main>
    </div>
  );
} 

export default App
