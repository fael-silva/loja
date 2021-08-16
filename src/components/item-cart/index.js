import React from 'react';
import { FaTrash } from "react-icons/fa";



function ItemCart(props) {
  return (
    <tr key={props.id}>
      <th scope="row" className="">
        <img src={props.image} class="img-thumbnail" alt="Product" width="256" height="192"></img>
      </th>
      <td>{props.name}</td>
      <td>{props.price}</td>
      <td>
        <input type="number" step="1" min="0" name="quantity" size="2" />
      </td>
      <td>{props.stock}</td>
      <td className="text-center"><FaTrash /></td>
    </tr>
  );
}

export default ItemCart;