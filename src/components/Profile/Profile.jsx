import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

import "./Profile.css";
function Profile({
  handleCardClick,
  handleAddClick,
  clothingItems,
  handleUpdateClick,
  onLogout,
}) {
  return (
    <section className="profile">
      <SideBar
        handleUpdateClick={handleUpdateClick}
        onLogout={onLogout}
      />
      <ClothesSection
        handleCardClick={handleCardClick}
        handleAddClick={handleAddClick}
        clothingItems={clothingItems}
      />
    </section>
  );
}

export default Profile;
