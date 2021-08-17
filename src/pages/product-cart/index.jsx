import React from 'react';
import Header from '../../components/header';
import ItemCart from '../../components/item-cart';
import {formatPrice} from '../../utils/string';

import { Modal, 
         Button, 
         Alert, 
         FloatingLabel, 
         Form, 
         Col,
         Row
} from 'react-bootstrap';

import 'react-bootstrap/ModalHeader';
import { useSelector } from 'react-redux';
import { CardText } from 'reactstrap';

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
          <Alert variant="success">
            <h2>Compra realizada com sucesso</h2>
          </Alert> 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>Compra de {props.amount} itens no valor de R$ {props.sumPrice}</h3>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} href="/cart">Fechar e limpar carrinho</Button>
      </Modal.Footer>
    </Modal>
  );
}


function ProductCart(){
  const [modalShow, setModalShow] = React.useState(false);
  const cart = useSelector((state) => state.cart);

  function sumPrice(){
    let totalPrice = 0;
    cart.map(item => totalPrice += parseInt(item.price));

    return totalPrice;
  }

  return(
    <div>
      <Header />

      <section className="py-3">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {cart.length === 0 ? (<p>Lista está vazia...</p>) : (
              <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Imagem</th>
                      <th scope="col">Produto</th>
                      <th scope="col">Preço</th>
                      <th scope="col">Estoque</th>
                      <th scope="col">Remover</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => (
                      <ItemCart 
                        key={index}
                        product={item}
                      />
                    ))}
                  </tbody>
              </table>
            )}
          </div>
        </div>
      </section>

      <div className="container">
        <section className="py-2">
          <div className="row">
            <div className="col-4">
              <FloatingLabel controlId="floatingSelect" label="Formas de pagamento">
                <Form.Select aria-label="Floating label select example">
                  <option>Clique para selecionar uma forma de pagamento</option>
                  <option value="1">Cartão</option>
                  <option value="2">Boleto</option>
                  <option value="3">Pixx</option>
                </Form.Select>
              </FloatingLabel>
            </div>
            <div className="col-6">
            </div>
            <div className="col-2">
              Total: R$ {sumPrice()}
            </div>
          </div>
        </section>
        <section className="py-2">
          <div className="row">
            <div className="col-4">
              <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  {/* <Form.Label column sm="3">
                    Cupom
                  </Form.Label> */}
                  <Col sm="12">
                    <Form.Control type="text" placeholder="Cupom de desconto" />
                  </Col>
                </Form.Group>
              </Form>
            </div>
            <div className="col-6">
              
            </div>
            <div className="col-2">
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Prosseguir...
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                sumPrice = {sumPrice()}
                amount = {cart.length}
              />
            </div>
          </div>
        </section>
      </div>
      

    </div>
  ); 
}

export default ProductCart;