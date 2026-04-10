import { addDoc, collection, getDocs, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "./services/firebase/firebase"

const productsCollection = collection(db,'products')

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)

  // Montaje de la app

  // useEffect --> fetch de productos
  // Firestore --> devuelve documentos
  // setProductos guarda los datos en un estado (useState)
  // React renderizar una lista

  const fetchProducts = async () => {
    console.log("Pide los productos a la base de datso");
    setLoading(true);
    setError("");

    try {
      const q = query(productsCollection, orderBy("price"));
      const snapshot = await getDocs(q);

      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(docs);
      setProducts(docs);
    } catch (error) {
      console.log(error);
      setError("Hubo un error al cargar los productos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Agregar producto a la base de datos
  // Usuario completa un formulario
  // HandleAddProduct
  // addDoc guardar en firebase
  // fetchProducts volver a consultarlos
  // setProductos actualizar la lista (useState)
  // React rendriza (dibuja ) la lista actualizada


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Agrega un nuevo producto a la base de datos");
    if(!name.trim() || !price.trim()) {
      setError('Campos obligatorios')
      return
    }
    setError('')
    try {
      await addDoc(productsCollection, {
        name: name.trim(), 
        price: Number(price),
        createdAt: Date.now()
      })
      setName('')
      setPrice(0)
      fetchProducts()
    }catch (error){
      console.log(error)
      setError('No se pudo agregar el producto')
    }
  }

  return (
    <main className="container">
      <h1>React + Firestore</h1>
      <p className="subtitle">Consulta de producto y agrega nuevos registros</p>
      <form className="form" onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Nombre de produto"
          value={name}
          onChange={(e)=> setName(e.target.value)}
        />
        <input 
          type="number"
          placeholder="Item price"
          value={price}
          onChange={(e)=> setPrice(e.target.value)}
        />

        <button type='submit'>Agregar producto</button>
      </form>

      {error && <p className="error">{error}</p>}

      <section>
        <div className="header-row">
          <h2>Productos</h2>
          <button disabled={loading}>
            {loading ? "Cargando" : "Recargar"}
          </button>
        </div>

        {loading ? (
          <p>cargando productos...</p>
        ) : products.length === 0 ? (
          <p>No hay productos registrados</p>
        ) : (
          <ul className="list">
            {products.map((product) => (
              <li key={product.id} className="item">
                <span>{product.name}</span>
                <strong>{product.price}</strong>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App
