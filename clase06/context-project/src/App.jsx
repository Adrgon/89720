import Header from "./components/Header"
import { MainContent } from "./components/MainContent"
import { useTheme } from "./context/ThemeContext"


function App() {
  const {darkMode} = useTheme()


  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <div className="container">
          <Header />
        <MainContent />
      </div>
    </div>
  );
  
}


export default App
