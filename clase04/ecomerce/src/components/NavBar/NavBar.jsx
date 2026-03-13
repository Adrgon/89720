import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css"

function NavBar({cartCount, title}) {
  return (
    <header className="nav">
      <div className="nav__inner">
        <button type="button" className="nav__brand">
          {title}
        </button>
        <nav className="nav__links">
          <button type="button" className="nav__link">
            Phones
          </button>
          <button type="button" className="nav__link">
            Tablets
          </button>
          <button type="button" className="nav__link">
            Notebooks
          </button>
        </nav>
        <div className="nav__actions">
          <CardWidget cartCount={cartCount}/>
        </div>
      </div>
    </header>
  );
}

export default NavBar
