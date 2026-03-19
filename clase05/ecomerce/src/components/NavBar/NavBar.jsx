import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css"

function NavBar({ cartCount, title, onBrandClick, onSelectCategory }) {
  return (
    <header className="nav">
      <div className="nav__inner">
        <button
          type="button"
          className="nav__brand"
          onClick={() => onBrandClick && onBrandClick()}
        >
          {title}
        </button>
        <nav className="nav__links">
          <button
            type="button"
            className="nav__link"
            onClick={() => onSelectCategory && onSelectCategory("celular")}
          >
            Phones
          </button>
          <button
            type="button"
            className="nav__link"
            onClick={() => onSelectCategory && onSelectCategory("tablet")}
          >
            Tablets
          </button>
          <button
            type="button"
            className="nav__link"
            onClick={() => onSelectCategory && onSelectCategory("computer")}
          >
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
