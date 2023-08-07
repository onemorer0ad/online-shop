import React from 'react';
import Modal from '../UI/Modal';
import s from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${Math.abs(cartContext.totalAmount.toFixed(2))}`;
  const hasItems = cartContext.items.length > 0;

  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={s['cart-items']}>
      {cartContext.items.map((item) => {
        return (
          <CartItem
            onAdd={addCartItemHandler.bind(null, item)}
            onRemove={removeCartItemHandler.bind(null, item.id)}
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal hideModalCard={props.hideModalCard}>
      {cartItems}
      <div className={s.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      <div className={s.actions}>
        <button onClick={props.hideModalCard} className={s['button--alt']}>
          Закрыть
        </button>
        {hasItems && <button className={s.button}>Оформить заказ</button>}
      </div>
    </Modal>
  );
};

export default Cart;
