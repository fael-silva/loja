import React from 'react';
import Header from '../../components/header';
import { FaTrash } from "react-icons/fa";

function ProductCart(){
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
                    <th scope="col">Quantidade</th>
                    <th scope="col">Total</th>
                    <th scope="col">Remover</th>
                  </tr>
                </thead>
                <tbody>
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
                </tbody>
            </table>
          </div>
        </div>
      </section>
      

    </div>
  ); 
}

export default ProductCart;