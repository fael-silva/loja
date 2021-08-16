import React from 'react';

import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';

function ProductCard(props) {

  return (
    <div className="">
      <div className="col mb-5 mt-auto" key={props.id}>
        <Card>
          <CardImg width="100%" src={props.image} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">{props.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{props.price}</CardSubtitle>
            <Button color="success" className="text-center mt-auto">Adicione ao carrinho</Button>
          </CardBody>
        </Card>

      </div>

    </div>

  );

}

export default ProductCard;