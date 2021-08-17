import React,  { useState, useEffect } from 'react';
import Header from '../../components/header';
import ProductCard from '../../components/product-card';
import {useDispatch} from 'react-redux';
import {addItem} from '../../store/ducks/cart';

function Products(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetch("https://5d6da1df777f670014036125.mockapi.io/api/v1/product")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  if(error) return <div>Error: {error.message}</div>;
  if(!isLoaded) return <div>Loading...</div>;
  
  function addItemCart(item){
    dispatch(addItem(item));
  }

  return (
    <div>
      <Header email={props.email}/>
      <section className="py-3">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {items.map((item, index) => (
              <ProductCard 
                key={index}
                product={item}
                addItemCart={addItemCart}
              />
            ))}
          </div>
        </div>
      </section>

    </div >
  );
}

export default Products;