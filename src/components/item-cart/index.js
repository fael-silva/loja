import React from 'react';
import { FaTrash } from "react-icons/fa";

function ItemCart() {
  return (
    <div>
      <tr>
        <th scope="row" className="">
          <img src="http://lorempixel.com/640/480/food" class="img-thumbnail" alt="Product" width="256" height="192"></img>
        </th>
        <td>Saia rodada corte godê</td>
        <td>R$89,90</td>
        <td>
          <input type="number" step="1" min="0" name="quantity" size="2" />
        </td>
        <td>R$89,90</td>
        <td className="text-center"><FaTrash /></td>
      </tr>
    </div>
  );
}

export default ItemCart;