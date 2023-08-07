import React from 'react';
import sushiImage from '../../assets/sushi.jpg';
import s from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={s.header}>
        <h1>Япона кухня</h1>
        <HeaderCartButton onClick={props.showModalCard} />
      </header>
      <div className={s['main-image']}>
        <img src={sushiImage} alt="Блюда кухни" />
      </div>
    </React.Fragment>
  );
};

export default Header;
