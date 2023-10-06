import FoodItem from './FoodItem';

const Favorites = ({ favorites }) => {
  return (
    <ul className="favorites">
      {favorites.map((food, idx) => <FoodItem src={food} key={idx} />)}
    </ul>
  );
};

export default Favorites;