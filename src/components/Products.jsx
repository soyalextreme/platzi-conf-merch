import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Product from '../components/Product';
import '../styles/components/Products.css';

const Products = () => {
  const { addToCart, products } = useContext(AppContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
