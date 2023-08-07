import React from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import s from './MealList.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Ролл Наоми',
    description:
      'Сыр филадельфия, куриное филе, масаго, помидор, огурец, кунжут',
    price: 11.99,
  },
  {
    id: 'm2',
    name: 'Cпайс в лососе',
    description: 'Рис, лосось, соус спайс',
    price: 3.99,
  },
  {
    id: 'm3',
    name: 'Суши с угрем',
    description: 'Угорь копченый, соус унаги, кунжут',
    price: 4.99,
  },
  {
    id: 'm4',
    name: 'Поке с лососем',
    description:
      'Рис, лосось, огурец, чука, нори, стружка тунца, соус ореховый',
    price: 8.99,
  },
];

const MealList = () => {
  const mealList = DUMMY_MEALS.map((card) => {
    return (
      <MealItem
        id={card.id}
        key={card.id}
        name={card.name}
        description={card.description}
        price={card.price}
      />
    );
  });

  return (
    <section className={s.meals}>
      <Card>
        <ul> {mealList}</ul>
      </Card>
    </section>
  );
};

export default MealList;
