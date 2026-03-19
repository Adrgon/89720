
import "./App.css"

import { useState } from "react"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import NavBar from "./components/NavBar/NavBar.jsx"

function App() {
  const cartCount = 5
  const [categoryId, setCategoryId] = useState(null)
  const [selectedProductId, setSelectedProductId] = useState(null)

  const handleSelectCategory = (id) => {
    setCategoryId(id)
    setSelectedProductId(null)
  }

  const handleResetSelection = () => {
    setCategoryId(null)
    setSelectedProductId(null)
  }
  
  return (
    <div className="app">
      <NavBar 
        cartCount={cartCount} 
        title="Tienda Coder"
        onBrandClick={handleResetSelection}
        onSelectCategory={handleSelectCategory}
      />
      <main className="app-content">
        {selectedProductId ? (
          <ItemDetailContainer productId={selectedProductId} />
        ) : (
          <ItemListContainer
            categoryId={categoryId}
            greetings={categoryId ? `Categoria: ${categoryId}` : "Explorar productos"}
            onSelectProduct={setSelectedProductId}
          />
        )}
      </main>
    </div>
  );
}

export default App
