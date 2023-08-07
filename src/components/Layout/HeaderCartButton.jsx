import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import s from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const [isButtonAnimated, setIsButtonAnimated] = useState(false);

  const cartContext = useContext(CartContext);
  const cartItemsNumber = cartContext.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const buttonClasses = `${s.button} ${isButtonAnimated ? s.bump : ''}`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setIsButtonAnimated(true);

    const timer = setTimeout(() => {
      setIsButtonAnimated(false);
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <button onClick={props.onClick} className={buttonClasses}>
      <span className={s.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={s.badge}>{cartItemsNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
