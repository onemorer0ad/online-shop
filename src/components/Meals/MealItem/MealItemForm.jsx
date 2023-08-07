import React, { useState } from 'react';
import Input from '../../UI/Input';
import s from './MealItemForm.module.css';
import { useRef } from 'react';

const MealItemForm = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const inputAmount = amountInputRef.current.value;

    if (
      inputAmount.trim().length === 0 ||
      +inputAmount < 1 ||
      +inputAmount > 10
    ) {
      setIsAmountValid(false);
      return;
    }

    props.onAddToCart(+inputAmount);
  };

  return (
    <form onSubmit={submitHandler} className={s.form}>
      <Input
        ref={amountInputRef}
        label="Количество"
        input={{
          key: props.id,
          id: props.id,
          type: 'number',
          min: '1',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Добавить</button>
      {!isAmountValid && <p>Количество должно быть больше 0 и меньше 10</p>}
    </form>
  );
};

export default MealItemForm;
