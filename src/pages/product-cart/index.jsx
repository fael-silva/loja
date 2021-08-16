import React from 'react';
import Header from '../../components/header';
import ItemCart from '../../components/item-cart';

function ProductCart(){
  const productList = [
    {id: 1, name:"Rustic Metal Fish", price: 289.00, image: "http://lorempixel.com/640/480/food", stock: 65171},
    {id: 2, name:"Sleek Wooden Soap", price: 430.00, image: "http://lorempixel.com/640/480/transport", stock: 91260},
    {id: 3, name:"Small Cotton Shoes", price: 993.00, image: "http://lorempixel.com/640/480/transport", stock: 36608},
  ];


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
                    <th scope="col">Quantidade</th>
                    <th scope="col">Total</th>
                    <th scope="col">Remover</th>
                  </tr>
                </thead>
                <tbody>
                  {productList.map(item => (
                    <ItemCart 
                      id={item.id} 
                      image={item.image} 
                      name={item.name} 
                      price={item.price}
                    />
                  ))}
                </tbody>
            </table>
            {/* adicionar "rodapé do carrinho" - total e forma de pagamento */}
          </div>
        </div>
      </section>
      

    </div>
  ); 
}

export default ProductCart;