import { useTheme } from "../context/ThemeContext"


export const MainContent = () => {
    const {darkMode} = useTheme()
  return (
    <main>
      <h2>Contenido principal</h2>
      <p>El tema actual es {darkMode ? "oscuro" : "claro"}</p>
      <p>ESte componente tambien consume el contexto directamente, sin recibir props desde App ni Header</p>
    
    <div className="info-grid">
        <div className="info-box">
            <h3>Que muestra este ejemplo</h3>
            <ul>
                <li>createContext</li>
                <li>Provider</li>
                <li>Custon Hook</li>
                <li>Estado global simple</li>
            </ul>
        </div>
        <div className="info-box">
            <h3>Cuando usarlo</h3>
            <ul>
                <li>Tema claro / oscuro</li>
                <li>Autenticacion de usuario</li>
                <li>Idioma</li>
                <li>Preferencias globales</li>
                <li>funcionalidades especificas (Carrito)</li>
            </ul>
        </div>
    </div>
    </main>
  );
}
