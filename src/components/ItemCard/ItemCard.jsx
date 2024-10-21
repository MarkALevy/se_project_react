import { useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ItemCard.css";
function ItemCard({ item, onCardClick, onCardLike }) {
  const [isLiked, setIsLiked] = useState(item.likes.includes(item.owner));
  const currentUser = useContext(CurrentUserContext);
  const isOwn = item.owner === currentUser?._id;

  const itemLikeButtonClassName = `${
    isOwn ? "card__like-button" : "card__like-button card__like-button_hidden"
  }`;

  const handleCardClick = () => {
    onCardClick(item);
  };
  const handleLike = () => {
    onCardLike(item, isLiked, setIsLiked);
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
              ? `${itemLikeButtonClassName} card__like-button_enabled`
              : `${itemLikeButtonClassName}`
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
