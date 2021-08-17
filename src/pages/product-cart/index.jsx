import React from 'react';
import Header from '../../components/header';
import ItemCart from '../../components/item-cart';
import {formatPrice} from '../../utils/string';

import { Modal, Button } from 'react-bootstrap';

import 'react-bootstrap/ModalHeader';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered 
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


function ProductCart(){
  const [modalShow, setModalShow] = React.useState(false);


  const productList = [
    {id: 1, name:"Rustic Metal Fish", price: 289.00, image: "http://lorempixel.com/640/480/food", stock: 65171},
    {id: 2, name:"Sleek Wooden Soap", price: 430.00, image: "http://lorempixel.com/640/480/transport", stock: 91260},
    {id: 3, name:"Small Cotton Shoes", price: 993.00, image: "http://lorempixel.com/640/480/transport", stock: 36608},
  ];

  const linkStyle = {
    display: "contents"
  };

  //Função para realizar delte do objeto no array
  function remove(id){
    return;
  }


  // onClick={() => remove(item.id)}
  return(
    <div>
      <Header />

      <section className="py-3">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Imagem</th>
                    <th scope="col">Produto</th>
                    <th scope="col">Preço</th>
                    {/* <th scope="col">Quantidade</th> */}
                    <th scope="col">Estoque</th>
                    <th scope="col">Remover</th>
                  </tr>
                </thead>
                <tbody>
                  {productList.map(item => (
                    <ItemCart 
                      id={item.id} 
                      image={item.image} 
                      name={item.name} 
                      price={formatPrice(item.price)}
                      stock={item.stock}
                    />
                  ))}
                </tbody>
            </table>
            {/* adicionar "rodapé do carrinho" - total e forma de pagamento */}
          </div>
        </div>
      </section>

      <div className="container">
        <section className="py-2">
          <div class="row">
            <div class="col-10">
              
            </div>
            <div class="col-2">
              Total: R$ x.xxx,xx { }
            </div>
          </div>
        </section>
        <section className="py-2">
          <div class="row">
            <div class="col-10 justify-content-end">
              
            </div>
            <div class="col-2">
              {/* <button type="button" class="btn btn-info">
                <a class="nav-link" aria-current="page" href="/cart" style={linkStyle}>Prosseguir...</a>
              </button> */}
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Prosseguir...
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </div>
        </section>
      </div>
      

    </div>
  ); 
}

export default ProductCart;