import { useTheme } from "../context/ThemeContext"
import { ThemeButton } from "./ThemeButton";

const Header = () => {
    const {darkMode} = useTheme()
  return (
    <>
      <h1>{darkMode ? "Modo oscuro" : "Modo claro"}</h1>
      <ThemeButton />
    </>
  );
}

export default Header
