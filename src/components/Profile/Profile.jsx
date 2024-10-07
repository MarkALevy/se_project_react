import avatar from "../../assets/Avatar.png";
// import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import "./Profile.css";
function Profile({ handleCardClick, handleAddClick, clothingItems }) {
  return (
    <section className="profile">
      <div className="profile__user-container">
        <img src={avatar} alt="Terrence Tegegne" className="profile__avatar" />
        <p className="profile__user-name">Terrence Tegegne</p>
      </div>
      <div className="profile__card-section">
        <p className="profile__card-section__text">
          Your items
          <button
            onClick={handleAddClick}
            type="button"
            className="profile__add-clothes-btn"
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
    </section>
  );
}

export default Profile;
