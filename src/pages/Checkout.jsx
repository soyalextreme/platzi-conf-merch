import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';
import { handleSumTotal } from '../utils';
import { Helmet } from 'react-helmet';
import Head from '../components/Head';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <>
        <Head title="Checkout"/>
        <div className="Checkout">
          <div className="Checkout-content">
            {cart.length > 0 ? (
            (
            <h3>Lista de pedidos: </h3>

          )          ) : (
            (
            <h3>Sin pedidos: </h3>
          )
          )}
            {cart.map((item) => (
              <div className="Checkout-item">
                <div className="Checkout-element">
                  <h4>{item.title}</h4>
                  <span>{item.price}</span>
                </div>
                <button type="button" onClick={() => handleRemove(item)}>
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            ))}
          </div>
          {cart.length > 0 && (
            <div className="Checkout-sidebar">
              <h3>{`Precio Total: $ ${handleSumTotal(cart)}`}</h3>
              <Link to="/checkout/information">
                <button type="button">Continuar Pedido</button>
              </Link>
            </div>
          )}
        </div>
    </>
  );
};

export default Checkout;
