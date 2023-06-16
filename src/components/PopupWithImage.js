import React from "react";

const ImagePopup = ({ onClose, card }) => {
  return (
    <div className={`popup popup_type_photo ${card.link ? "popup_opened" : ""}`}>
      <div className="popup__image-container">
        <button type="button" className="popup__close" onClick={onClose}></button>
        <figure className="popup__image-opened">
          <img className="popup__image" src={card.link} alt={card.name}/>
          <figcaption className="popup__caption">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default ImagePopup;


