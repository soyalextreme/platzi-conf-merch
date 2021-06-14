import React from 'react';
import initialState from '../initialState';
import Products from '../components/Products';
import Head from '../components/Head';

const Home = () => {
  return (
    <>
      <Head title="Home" />
      <Products products={initialState.products} />
    </>
  );
};

export default Home;
