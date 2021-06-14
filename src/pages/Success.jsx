import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Success.css';
import Map from '../components/Map';
import useLocation from '../hooks/useLocation';
import Head from '../components/Head';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  const location = useLocation(buyer.address);

  return (
    <>
      <Head title="Success" />
      <div className="Success">
        <div className="Success-content">
          <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
          <span>Tu pedido llegara en 3 dias a tu direccion:</span>
          <div className="Success-map">
            <Map data={location} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
