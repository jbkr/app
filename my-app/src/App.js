import './App.css';
import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import MainCard from './components/MainCard';
import Favorites from './components/Favorites';

const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};

// App component =================================================================
// 2개의 리액트 엘리먼트를 렌더링하고자 할 때
const App = () => {
  const foodOne = 'img/food-one.jpg';
  const foodTwo = 'img/food-two.jpg';
  // const foodThree = 'img/food-three.jpg';
  const foods = [foodOne, foodTwo, foodThree];
  const [mainFood, setMainFood] = React.useState(foods[0]);
  const [favorites, setFavorites] = React.useState(() => {
    return jsonLocalStorage.getItem('favorites') || [];
  });
  const [counter, setCounter] = React.useState(() => {
    return jsonLocalStorage.getItem('counter');
  });


  const choiceFavorites = favorites.includes(mainFood);

  function updateCounter(event) {
    setCounter((pre) => {
      const nextCounter = pre + 1;
      jsonLocalStorage.setItem('counter', nextCounter);
      return nextCounter;
    });
    setMainFood(foodTwo);
  }

  function handleHeartClick() {
    setFavorites((pre) => {
      const nextFavorites = [...pre, mainFood];
      jsonLocalStorage.setItem('favorites', nextFavorites);
      return nextFavorites;
    });
  }

  return (
    <div>
      <Title>[component] 페이지 {counter}</Title>
      <Form updateCounter={updateCounter} />
      <MainCard
        src={mainFood}
        handleHeartClick={handleHeartClick}
        choiceFavorites={choiceFavorites}
      />
      <Favorites favorites={favorites} />
    </div>
  );
};

export default App;
