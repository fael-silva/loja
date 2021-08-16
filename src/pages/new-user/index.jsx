import React from 'react';

//nome, email, senha, data de nascimento e cpf. 

function NewUser() {
  return (
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-7">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                  <div class="card-header"><h3 class="text-center font-weight-light my-4">Create Account</h3></div>
                  <div class="card-body">
                    <form>
                      <div class="row mb-3">
                        <div class="col-md-6">
                          <div class="form-floating mb-3 mb-md-0">
                            <input class="form-control" id="inputName" type="text" placeholder="Entre com seu nome completo" />
                            <label for="inputName">Nome Completo</label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-floating mb-3">
                            <input class="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                            <label for="inputEmail">Email</label>
                          </div>
                        </div>
                      </div>

                      <div class="row mb-3">
                        <div class="col-md-6">
                          <div class="form-floating mb-3 mb-md-0">
                            <input class="form-control" id="inputPassword" type="password" placeholder="Create a password" />
                            <label for="inputPassword">Senha</label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-floating mb-3 mb-md-0">
                            <input class="form-control" id="inputDate" type="date" placeholder="Entre com sua data de nascimento" />
                            <label for="inputDate">Data de Nascimento</label>
                          </div>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col-md-6">
                          <div class="form-floating mb-3 mb-md-0">
                            <input class="form-control" id="inputCPF" type="text" placeholder="Create a password" />
                            <label for="inputCPF">CPF</label>
                          </div>
                        </div>
                      </div>
                      <div class="mt-4 mb-0">
                        <div class="d-grid"><a class="btn btn-primary btn-block" href="login.html">Create Account</a></div>
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

export default NewUser;