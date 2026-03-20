import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";

function Home() {
  return (
    <section>
      <h2>Inicio</h2>
      <p>Ejemplo bsico de rutas con React Router</p>
      <p>Intenta con una ruta con parametros</p>
    </section>
  );
}

function About() {
  return (
    <section>
      <h2>Nosotros</h2>
      <p>Navegacion a una pagina simple</p>
    </section>
  );
}

function Producto() {
  //let id = 5;
  const { id } = useParams();
  return (
    <section>
      <h2>PRoducto</h2>
      <p>Mostrando el producto {id}</p>
    </section>
  );
}

function NotFound() {
  return (
    <section>
      <h2>Ruta no encontrada</h2>
      <p> 🥹 404 Not Found </p>
    </section>
  );
}

export default function Enrutado() {
  return (
    <BrowserRouter>
      <header>
        <h1>Demo de Enrutado</h1>
        <nav style={{ display: "flex", gap: 12 }}>
          <Link to="/">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/producto/5">Producto 5</Link>
          <Link to="/cualquier-cosa">Cualquier cosa</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/producto/:id" element={<Producto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
