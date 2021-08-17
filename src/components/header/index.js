import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

const linkStyle = {
  display: "contents"
};

function Header(props) {

  const length = useSelector((state) => state.cart.length);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to="/">Lojinha</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Produtos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/newuser">Novo Cadastro</Link>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-dark">
              <FaShoppingCart />
              <Link className="nav-link" aria-current="page" to="/cart" style={linkStyle}> Carrinho </Link>
              <span className="badge bg-dark text-white ms-1 rounded-pill">{length}</span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;