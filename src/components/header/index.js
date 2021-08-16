import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

import { Link } from 'react-router-dom';

const linkStyle = {
  display: "contents"
};

function Header(props) {
  // console.log(props);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="/">Lojinha</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/">Produtos</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/login">Login</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/newuser">Novo Cadastro</Link>
            </li>
          </ul>
          <form class="d-flex">
            <button class="btn btn-outline-dark">
              <FaShoppingCart />
              <a class="nav-link" aria-current="page" href="/cart" style={linkStyle}> Carrinho </a>
              <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;