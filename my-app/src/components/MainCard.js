const MainCard = ({ src, handleHeartClick, choiceFavorites }) => {
  const heartIcon = choiceFavorites ? '🧡' : '💛';

  return (
    <div className="main-card">
      <img
        src={src}
        alt="올리브오일"
        width="400"
        style={{ border: "1px solid red" }}
      />
      <button onClick={handleHeartClick}>{heartIcon}</button>
    </div>
  );
};

export default MainCard;