import successIcon from '../images/onSuccess.svg';
import unsuccessIcon from '../images/unSuccess.svg';

const InfoTooltip = ({ isOpen, onClose, onSuccess }) => {
  return (
    <div className={` popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_type_infotool">
        <button type="button" className="popup__close" onClick={onClose} />
        <img
          src={onSuccess ? successIcon : unsuccessIcon}
          alt={
            onSuccess ? 'Регистрация прошла успешно' : 'Регистрация не прошла'
          }
          className="popup__signup-icon"
        />
        <h3 className="popup__signup-title">
          {onSuccess
            ? 'Вы успешно зарегистрировались!'
            : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </h3>
      </div>
    </div>
  );
};

export default InfoTooltip;