import React from 'react';
import { FaTrash } from "react-icons/fa";
import { formatPrice } from '../../utils/string';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../store/ducks/cart';

function ItemCart({ product }) {
  const dispatch = useDispatch();

  function removeItemCart(id) {
    dispatch(removeItem(id));
  }

  return (
    <tr key={product.id}>
      <th scope="row" className="">
        <img src={product.image} className="img-thumbnail" alt="Product" width="256" height="192"></img>
      </th>
      <td>{product.name}</td>
      <td>R${formatPrice(product.price)}</td>
      <td>{product.stock}</td>
      <td className="text-center">
        <button className="btn btn-danger" onClick={() => removeItemCart(product.id)}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}

export default ItemCart;