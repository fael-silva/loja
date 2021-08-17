import React from 'react';
import { stringLimit } from '../../utils/string';

import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';

function ProductCard({ product, addItemCart }) {

  return (
    <div className="">
      <div className="col mb-5 mt-auto" key={product.id}>
        <Card>
          <CardImg width="100%" src={product.image} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">{stringLimit(product.name)}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{product.price}</CardSubtitle>
            <Button color="success" className="text-center mt-auto" onClick={() => addItemCart(product)}>Adicione ao carrinho</Button>
          </CardBody>
        </Card>

      </div>

    </div>

  );

}

export default ProductCard;