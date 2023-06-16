import useFormValidation from "./FormValidator";

const PopupWithForm = (props) => {
  const { isFormValid } = useFormValidation();

  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" aria-label="Кнопка для закрытия" onClick={props.onClose}/>
        <h2 className="popup__heading">{props.title}</h2>
        <form className="popup__form form" action="#" name={props.name} onSubmit={props.onSubmit}>
          <fieldset className="form__set">
            {props.children}
            <button
              type="submit" 
              className="form__submit-button" 
              aria-label={`Кнопка ${props.buttonText}`} 
              disabled={!isFormValid}>
              {props.onLoading ? props.onLoadingText : props.buttonText}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
