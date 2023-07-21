import "./styles.css";
import { useState } from "react";
import { SettingIcon } from "../Icons/SettingIcon";
import { MenuArrow } from "../Icons/MenuArrow";
import { RightCornerMenuPopup } from "../RightCornerMenuPopup/RightCornerMenuPopup";
import jpg from "../../Images/Karol_Prusek_foto_1.jpg";

export const HeaderMenu = () => {
  const [isArrowClicked, setArrowClicked] = useState(false);

  function clickArrowInHeaderMenu() {
    setArrowClicked(!isArrowClicked);
  }
  return (
    <div className="images-container">
      <SettingIcon />
      <div className="circular_image">
        <img src={jpg} alt="Karol Prusek" />
      </div>
      <div className="person-container">
        <h4>Karol Prusek</h4>
        <h5>kursant</h5>
      </div>

      <button onClick={clickArrowInHeaderMenu} className="header-button-arrow">
        <MenuArrow className="menu-arrow" />
      </button>
      {isArrowClicked && <RightCornerMenuPopup />}
    </div>
  );
};
