import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Home from '../pages/Home';
import Checkout from '../pages/Checkout';
import Information from '../pages/Information';
import Payment from '../pages/Payment';
import Success from '../pages/Success';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout';

// state
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  const isEmpty = Object.keys(initialState.state).length;

  return (
    <>
      {isEmpty > 0 ? (
        <AppContext.Provider value={initialState}>
          <BrowserRouter>
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/checkout" component={Checkout} />
                <Route
                  exact
                  path="/checkout/information"
                  component={Information}
                />
                <Route exact path="/checkout/payment" component={Payment} />
                <Route exact path="/checkout/success" component={Success} />
                <Route component={NotFound} />
              </Switch>
            </Layout>
          </BrowserRouter>
        </AppContext.Provider>
      ) : (
        <h2>Loading</h2>
      )}
    </>
  );
};

export default App;
