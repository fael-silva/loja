import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from '../../components/store/context';

function initialState() {
  return { email: '', password: '' };
}

function onLoginSubmit({ email, password }) {
  if (email === 'admin@gmail.com' && password === '1234') {
    return { token: '1234' };
  }
  return { error: 'Credenciais invalidas' }
}

function Login() {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    const { token } = onLoginSubmit(values);

    console.log(token);

    if (token) {
      setToken(token);
      return history.push('/products');
    }

    setError(error);
    setValues(initialState);
  }

  return (
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-5">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                  <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                  <div class="card-body">
                    <form onSubmit={onSubmit}>
                      <div class="form-floating mb-3">
                        <input class="form-control" id="email" name="email" type="email" placeholder="name@example.com" onChange={onChange} value={values.email} />
                        <label for="email">Email</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input class="form-control" id="password" name="password" type="password" placeholder="Senha" onChange={onChange} value={values.password} />
                        <label for="password">Senha</label>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                         <button type="submit" class="btn btn-primary" rounded>Entrar</button> 
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Login;