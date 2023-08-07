import React from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import { useState } from 'react';
import CartContextProvider from './store/CartContextProvider';

function App() {
  const [cartActive, setCartActive] = useState(false);

  const showModalCard = () => {
    setCartActive(true);
  };

  const hideModalCard = () => {
    setCartActive(false);
  };

  return (
    <CartContextProvider>
      {cartActive && <Cart hideModalCard={hideModalCard} />}
      <Header showModalCard={showModalCard} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
