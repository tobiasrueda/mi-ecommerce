import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="#">🛍EMPILCHADOS</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><a className="nav-link" href="#">Remeras</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Abrigos</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Pantalones</a></li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
