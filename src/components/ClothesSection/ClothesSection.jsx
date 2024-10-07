import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
function ClothesSection({ handleAddClick, handleCardClick, clothingItems }) {
  return (
    <div className="clothes-section">
      <p className="clothes-section__text">
        Your items
        <button
          onClick={handleAddClick}
          type="button"
          className="clothes-section__add-clothes-btn"
        >
          + Add new
        </button>
      </p>
      <ul className="cards__list">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
