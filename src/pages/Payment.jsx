import React, { useContext } from 'react';
import '../styles/components/Payment.css';
import { PayPalButton } from 'react-paypal-button-v2';
import AppContext from '../context/AppContext';
import { handleSumTotal } from '../utils';
import Head from '../components/Head';

const Payment = ({ history }) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  return (
    <>
      <Head title="Payment"    />
      <div className="Payment">
        <div className="Payment-content">
          <h3>Resumen del pedido: </h3>
          {cart.map((item) => (
            <div key={item.title} className="Payment-item">
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span>$ {item.price}</span>
              </div>
            </div>
          ))}
          <div className="Payment-button">
            <PayPalButton
              options={{
                clientId: process.env.CLIENT_ID_PAYPAL,
                intent: 'capture',
                currency: 'MXN',
              }}
              style={buttonStyles}
              amount={handleSumTotal(cart)}
              // createOrder={() => console.log('Start Payment')}
              onSuccess={(data) => handlePaymentSuccess(data)}
              onError={(error) => console.log(error.err)}
              onCancel={(data) => console.log(data)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
