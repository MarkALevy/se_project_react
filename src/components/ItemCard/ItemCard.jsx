import { useState } from "react";
import "./ItemCard.css";
function ItemCard({ item, onCardClick, onCardLike }) {
  const [isLiked, setIsLiked] = useState(item.likes.includes(item.owner));

  const handleCardClick = () => {
    onCardClick(item);
  };
  const handleLike = () => {
    onCardLike(item, isLiked);
    setIsLiked(!isLiked);
  };

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        <button
          type="button"
          aria-label="Like"
          className={
            isLiked
              ? "card__like-button card__like-button_enabled"
              : "card__like-button"
          }
          onClick={handleLike}
        ></button>
      </div>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
