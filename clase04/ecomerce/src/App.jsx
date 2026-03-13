
import "./App.css"

import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import NavBar from "./components/NavBar/NavBar.jsx"

function App() {
  const cartCount = 5
  
  return (
    <div className="app">
      <NavBar 
        cartCount={cartCount} 
        title="Tienda Coder"
      />
      <main className="app-content">
        <ItemListContainer />
      </main>
    </div>
  );
}

export default App
