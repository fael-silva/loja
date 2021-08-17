import {
  Modal,
  Button,
  Alert,
} from 'react-bootstrap';

export function MyVerticallyCenteredModal(props) {
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