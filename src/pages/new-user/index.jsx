import React from 'react';
import Header from '../../components/header';
import { validarCPF } from '../../utils/string';

//nome, email, senha, data de nascimento e cpf. 

function NewUser() {
  return (
    <div>
      <Header />
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                    <div className="card-body">
                      <form name="form1" action="#">
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="form-floating mb-3 mb-md-0">
                              <input className="form-control" id="inputName" type="text" placeholder="Entre com seu nome completo" required/>
                              <label for="inputName">Nome Completo</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating mb-3">
                              <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" name="email"
                              pattern="[a-zA-Z0-9.!#$%&amp;’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+"
                              title="Entre com um email válido" required 
                              />
                              <label for="inputEmail">Email</label>
                            </div>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="form-floating mb-3 mb-md-0">
                              <input className="form-control" id="inputPassword" type="password" placeholder="Create a password" required/>
                              <label for="inputPassword">Senha</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating mb-3 mb-md-0">
                              <input className="form-control" id="inputDate" type="date" placeholder="Entre com sua data de nascimento" 
                              pattern="\\d{4}-\\d{2}-\\d{2}"
                              title="Digite a data de nascimento no formato dd/mm/aaaa" required
                              />
                              <label for="inputDate">Data de Nascimento</label>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="form-floating mb-3 mb-md-0">
                              <input className="form-control" id="inputCPF" type="text" placeholder="Create a password" name="cpf"
                              pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                              title="Digite o CPF no formato nnn.nnn.nnn-nn" required
                              />
                              <label for="inputCPF">CPF</label>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 mb-0">
                          <div className="d-grid"><button className="btn btn-primary btn-block" href="login.html">Create Account</button></div>
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
    </div>  
  );
}

export default NewUser;