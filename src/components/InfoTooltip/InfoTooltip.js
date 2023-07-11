import successImg from '../../images/success.svg';
import failureImg from '../../images/error.svg';
import './InfoTooltip.css';

function InfoTooltip({ onClose, success, isOpen, text }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <figure className="popup__container">
        <img src={success ? successImg : failureImg} alt="изображение успеха или неудачи регистрации" className="popup__image" />
        <h1 className="popup__title">{text}</h1>
        <button type="button" onClick={onClose} className="popup__close-button popup__close-button_registration" aria-label="закрытие уведомления о регистрации"></button>
      </figure>
    </div>
  );
}

export default InfoTooltip;
