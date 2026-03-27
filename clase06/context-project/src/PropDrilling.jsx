import { useState } from "react"

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return <Layout darkMode={darkMode} setDarkMode={setDarkMode} />;
  
}

function Layout({darkMode, setDarkMode}) {
  return <Header darkMode={darkMode} setDarkMode={setDarkMode} />
}

function Header({darkMode, setDarkMode}){
  return <ThemeButton darkMode={darkMode} setDarkMode={setDarkMode} />
}

function ThemeButton({darkMode, setDarkMode}){
  return (
    <button onClick={()=> setDarkMode(!darkMode)}>{darkMode ? "Modo claro" : "Modo oscuro"}</button>
  )
}


export default App
