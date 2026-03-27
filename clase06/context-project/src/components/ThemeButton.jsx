import { useTheme } from "../context/ThemeContext";

export const ThemeButton = () => {
    const {darkMode, toogleTheme} = useTheme()
  return <button className="theme-button" onClick={toogleTheme}>Carmbar a {darkMode ? "claro" : "oscuro"}</button>;
};
