import React, { useContext } from 'react';
import '../styles/components/Payment.css';
import { PayPalButton } from 'react-paypal-button-v2';
import AppContext from '../context/AppContext';
import { CLIENT_ID_PAYPAL } from '../.config';
import { handleSumTotal } from '../utils';

const Payment = ({ history }) => {
  const { state } = useContext(AppContext);
  const { cart, buyer, addNewOrder } = state;

  const paypalOptions = {
    clientId: CLIENT_ID_PAYPAL,
    intent: 'capture',
    currency: 'MXN',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    console.log("TODO BIEN")
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };

      addNewOrder(newOrder);
      history.push('/checkout/success');;;
    }
  };

  return (
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
            options={{clientId: CLIENT_ID_PAYPAL, intent: "capture", currency: "MXN"}}
            style={buttonStyles}
            amount={handleSumTotal(cart)}
            // createOrder={() => console.log('Start Payment')}
            onSuccess={(data) => handlePaymentSuccess(data)}
            onError={(error) => console.log(error.err)}
            onCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payment;
